const { t } = require('../lib/i18n');
module.exports = {
  name: 'media',
  aliases: ['download', 'mediamenu'],
  description: 'Show media search commands',
  async run(ctx) {
    await ctx.reply(t(ctx.lang, 'mediaMenu'));
  }
};
