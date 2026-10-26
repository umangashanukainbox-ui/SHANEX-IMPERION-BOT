const { t } = require('../lib/i18n');
module.exports = {
  name: 'moviehelp',
  aliases: ['mediahelp'],
  description: 'Show movie search help',
  async run(ctx) {
    await ctx.reply(t(ctx.lang, 'movieHelp'));
  }
};
