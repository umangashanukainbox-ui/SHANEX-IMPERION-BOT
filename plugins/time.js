const { t } = require('../lib/i18n');

module.exports = {
  name: 'time',
  aliases: ['date'],
  description: 'Show the current date and time',
  async run(ctx) {
    const time = new Intl.DateTimeFormat('en-LK', {
      timeZone: 'Asia/Colombo',
      dateStyle: 'full',
      timeStyle: 'medium'
    }).format(new Date());
    await ctx.reply(t(ctx.lang, 'time', { time }));
  }
};
