const { t } = require('../lib/i18n');

module.exports = {
  name: 'groupinfo',
  aliases: ['ginfo'],
  description: 'Show information about the current group',
  async run(ctx) {
    if (!ctx.chat.endsWith('@g.us')) {
      await ctx.reply(t(ctx.lang, 'groupOnly'));
      return;
    }
    try {
      const metadata = await ctx.sock.groupMetadata(ctx.chat);
      await ctx.reply(t(ctx.lang, 'groupinfo', {
        name: metadata.subject || 'WhatsApp Group',
        count: metadata.participants?.length || 0,
        id: ctx.chat
      }));
    } catch {
      await ctx.reply(t(ctx.lang, 'error'));
    }
  }
};
