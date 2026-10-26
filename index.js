const fs = require('fs');
const path = require('path');
const pino = require('pino');
const makeWASocket = require('@whiskeysockets/baileys').default;
const {
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const settings = require('./settings');
const { t } = require('./lib/i18n');
const { getLanguage, setLanguage } = require('./lib/store');

const pluginDir = path.join(__dirname, 'plugins');
const commands = new Map();
const aliases = new Map();

for (const file of fs.readdirSync(pluginDir).filter(name => name.endsWith('.js'))) {
  const plugin = require(path.join(pluginDir, file));
  if (!plugin.name || typeof plugin.run !== 'function') {
    console.warn(`[plugin] Skipping invalid plugin: ${file}`);
    continue;
  }
  commands.set(plugin.name, plugin);
  for (const alias of plugin.aliases || []) aliases.set(alias, plugin.name);
}
console.log(`[SHANEX] Loaded ${commands.size} commands.`);

const rateLimits = new Map();
function allowed(chat) {
  const now = Date.now();
  const previous = rateLimits.get(chat) || 0;
  if (now - previous < 900) return false;
  rateLimits.set(chat, now);
  if (rateLimits.size > 2000) {
    for (const [key, value] of rateLimits) if (now - value > 60000) rateLimits.delete(key);
  }
  return true;
}

function unwrapMessage(message) {
  let current = message;
  while (current) {
    if (current.ephemeralMessage?.message) current = current.ephemeralMessage.message;
    else if (current.viewOnceMessage?.message) current = current.viewOnceMessage.message;
    else if (current.viewOnceMessageV2?.message) current = current.viewOnceMessageV2.message;
    else break;
  }
  return current || {};
}

function getText(message) {
  const msg = unwrapMessage(message.message);
  return msg.conversation
    || msg.extendedTextMessage?.text
    || msg.imageMessage?.caption
    || msg.videoMessage?.caption
    || msg.documentMessage?.caption
    || '';
}

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'session'));
  let version;
  try {
    ({ version } = await fetchLatestBaileysVersion());
  } catch {
    version = undefined;
    console.warn('[SHANEX] Could not fetch latest WhatsApp Web version; using library default.');
  }

  console.log('\n⚡ SHANEX IMPERION BOT starting...');
  console.log('Scan the QR shown below using WhatsApp > Linked devices.\n');

  const sock = makeWASocket({
    ...(version ? { version } : {}),
    auth: state,
    logger: pino({ level: process.env.LOG_LEVEL || 'silent' }),
    printQRInTerminal: true,
    browser: ['SHANEX IMPERION BOT', 'Chrome', '1.0.0'],
    markOnlineOnConnect: false,
    syncFullHistory: false
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async update => {
    const { connection, lastDisconnect } = update;
    if (connection === 'open') {
      console.log(`\n✅ ${settings.BOT_NAME} is connected.`);
      if (settings.SEND_OWNER_CONNECT_NOTICE && settings.OWNER_NUMBER) {
        try {
          const jid = `${settings.OWNER_NUMBER}@s.whatsapp.net`;
          await sock.sendMessage(jid, { text: t('en', 'connect', { bot: settings.BOT_NAME }) });
        } catch (error) {
          console.error('[SHANEX] Could not send owner connection notice:', error.message);
        }
      }
    }
    if (connection === 'close') {
      const code = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const loggedOut = code === DisconnectReason.loggedOut;
      console.warn(`[SHANEX] Connection closed (code: ${code || 'unknown'}).`);
      if (loggedOut) {
        console.error('[SHANEX] Logged out. Stop the process, remove the local session folder, and scan a new QR.');
      } else {
        console.log('[SHANEX] Reconnecting...');
        setTimeout(() => start().catch(err => console.error('[SHANEX] Restart failed:', err)), 3000);
      }
    }
  });

  sock.ev.on('messages.upsert', async ({ messages: incoming, type }) => {
    if (type !== 'notify') return;
    for (const message of incoming) {
      try {
        if (!message.message || message.key.fromMe) continue;
        const chat = message.key.remoteJid;
        if (!chat || chat === 'status@broadcast' || chat.endsWith('@newsletter')) continue;
        if (!allowed(chat)) continue;

        const text = getText(message).trim();
        if (!text) continue;

        let lang = getLanguage(chat);
        if (!lang) {
          const selected = ({ '1': 'si', '2': 'ta', '3': 'en' })[text.trim()];
          if (selected) {
            setLanguage(chat, selected);
            await sock.sendMessage(chat, { text: t(selected, 'languageSet') }, { quoted: message });
          } else {
            await sock.sendMessage(chat, { text: t('en', 'choose', { bot: settings.BOT_NAME }) }, { quoted: message });
          }
          continue;
        }

        const prefix = settings.PREFIX;
        if (text.toLowerCase() === `${prefix}language` || text.toLowerCase() === `${prefix}lang`) {
          await sock.sendMessage(chat, { text: t(lang, 'choose', { bot: settings.BOT_NAME }) }, { quoted: message });
          continue;
        }
        if (!text.startsWith(prefix)) continue;

        const body = text.slice(prefix.length).trim();
        if (!body) continue;
        const [rawCommand, ...args] = body.split(/\s+/);
        const name = rawCommand.toLowerCase();
        const commandName = commands.has(name) ? name : aliases.get(name);
        if (!commandName) {
          await sock.sendMessage(chat, { text: t(lang, 'unknown') }, { quoted: message });
          continue;
        }

        const plugin = commands.get(commandName);
        const started = Date.now();
        const ctx = {
          sock,
          message,
          chat,
          sender: message.key.participant || message.key.remoteJid,
          text,
          args,
          lang,
          settings,
          started,
          reply: (replyText, extra = {}) => sock.sendMessage(chat, { text: replyText, ...extra }, { quoted: message })
        };
        await plugin.run(ctx);
      } catch (error) {
        console.error('[command] Error:', error?.stack || error);
        try {
          const chat = message.key.remoteJid;
          const lang = getLanguage(chat) || 'en';
          await sock.sendMessage(chat, { text: t(lang, 'error') }, { quoted: message });
        } catch {}
      }
    }
  });
}

start().catch(error => {
  console.error('[SHANEX] Fatal startup error:', error);
  process.exitCode = 1;
});
