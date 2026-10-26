const { t } = require('../lib/i18n');

module.exports = {
  name: 'github',
  aliases: ['repo'],
  description: 'Show project repository information',
  async run(ctx) {
    await ctx.reply(t(ctx.lang, 'github', {
      bot: ctx.settings.BOT_NAME,
      version: ctx.settings.VERSION
    }));
  }
};
