# ⚡ SHANEX IMPERION BOT

A clean, plugin-based WhatsApp bot starter built with Node.js and Baileys. Commands are English-only; bot replies can be selected in Sinhala, Tamil, or English.

> **Important:** This project uses the unofficial WhatsApp Web protocol through Baileys. It is not affiliated with or endorsed by WhatsApp. Use responsibly and follow WhatsApp's terms. Avoid unsolicited messaging or bulk automation.

## Features

- QR-based WhatsApp Linked Devices connection
- First-contact language selection: Sinhala / Tamil / English
- Language preference saved locally per chat
- English command names with localized replies
- Plugin-based commands: `menu`, `alive`, `ping`, `language`, `time`, `quote`, `calc`, `system`, `owner`, `github`, `groupinfo`
- Basic per-chat command rate limiting
- Reconnect handling and clean environment configuration
- GitHub-ready project structure

## Requirements

- Node.js 20 or newer
- npm
- A WhatsApp account you control

## Run locally

1. Download or clone this repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `config.env.example` to `config.env`.
4. Edit `config.env`. Keep `OWNER_NUMBER` blank unless you want to enable the optional connection notice.
5. Start the bot:

   ```bash
   npm start
   ```

6. Scan the terminal QR with WhatsApp on your phone: **Settings → Linked devices → Link a device**.
7. Send a message to the linked bot account from another chat, or use the bot's own command flow in a chat where it receives incoming messages. The first incoming message in each chat triggers language selection:
   - `1` = Sinhala
   - `2` = Tamil
   - `3` = English
8. After choosing a language, try `.menu`.

### Note about the welcome message

WhatsApp does not provide a general “send a welcome to everyone” event when a device links. This bot asks each chat to choose a language when that chat first messages the bot. To send a connection notice to your own number, set `OWNER_NUMBER` and `SEND_OWNER_CONNECT_NOTICE=true` in `config.env`.

## Commands

| Command | Description |
|---|---|
| `.menu` | Show command menu |
| `.alive` | Bot status and uptime |
| `.ping` | Response timing |
| `.language` | Show language selector |
| `.time` | Sri Lanka date/time |
| `.quote` | Motivational quote |
| `.calc 12+5` | Basic arithmetic |
| `.system` | Runtime information |
| `.owner` | Owner details |
| `.github` | Repository info |
| `.groupinfo` | Current WhatsApp group details |

All command names are English. Replies follow the selected language.

## Add a command

Create a JavaScript file in `plugins/`, for example `plugins/hello.js`:

```js
module.exports = {
  name: 'hello',
  aliases: ['hi'],
  description: 'Say hello',
  async run(ctx) {
    await ctx.reply(`Hello! Welcome to ${ctx.settings.BOT_NAME}.`);
  }
};
```

Restart the bot to load new plugins.

## Upload to GitHub

1. Create a new GitHub repository named `SHANEX-IMPERION-BOT`.
2. Upload the contents of this folder (not the ZIP file itself).
3. Do **not** upload `session/`, `config.env`, `node_modules/`, or private credentials.
4. In GitHub, open **Add file → Upload files**, drag the project contents in, and commit.
5. For a command-line upload, run inside this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial SHANEX IMPERION BOT release"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/SHANEX-IMPERION-BOT.git
   git push -u origin main
   ```

Replace `YOUR-USERNAME` with your GitHub username.

## Deployment

You can start locally first. For a server host, use a persistent Node.js service with Node 20+, run `npm install` and `npm start`, and store environment values as host secrets. A persistent disk is required if you want the local `session/` and `data/languages.json` files to survive restarts. Do not commit the session folder.

## Security

- Never publish WhatsApp session files, pairing codes, `config.env`, API keys, or passwords.
- Do not use someone else's session or credentials.
- Review third-party plugins before installing them.
- The `calc` command is restricted to basic arithmetic characters; do not expand it to arbitrary JavaScript evaluation.
