const { t } = require('../lib/i18n');
const { calculate } = require('../lib/utils');

module.exports = {
  name: 'calc',
  aliases: ['math'],
  description: 'Calculate a basic arithmetic expression',
  async run(ctx) {
    if (!ctx.args.length) {
      await ctx.reply(t(ctx.lang, 'calcUsage'));
      return;
    }
    try {
      const result = calculate(ctx.args.join(' '));
      await ctx.reply(`🧮 ${ctx.args.join(' ')} = *${result}*`);
    } catch {
      await ctx.reply(t(ctx.lang, 'calcInvalid'));
    }
  }
};
