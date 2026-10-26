const { t } = require('../lib/i18n');

module.exports = {
  name: 'owner',
  aliases: ['creator'],
  description: 'Show bot owner information',
  async run(ctx) {
    await ctx.reply(t(ctx.lang, 'owner', {
      owner: ctx.settings.OWNER_NAME,
      bot: ctx.settings.BOT_NAME,
      prefix: ctx.settings.PREFIX
    }));
  }
};
