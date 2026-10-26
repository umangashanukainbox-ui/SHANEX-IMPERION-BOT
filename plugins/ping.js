const { t } = require('../lib/i18n');

module.exports = {
  name: 'ping',
  aliases: ['pong'],
  description: 'Measure bot response time',
  async run(ctx) {
    const ms = Date.now() - (ctx.message.messageTimestamp ? Number(ctx.message.messageTimestamp) * 1000 : Date.now());
    await ctx.reply(t(ctx.lang, 'ping', { ms: Math.max(0, ms) }));
  }
};
