const { t } = require('../lib/i18n');

const quotes = [
  'Great things are done by a series of small things brought together. — Vincent van Gogh',
  'It always seems impossible until it is done. — Nelson Mandela',
  'Success is the sum of small efforts, repeated day in and day out. — Robert Collier',
  'Small progress every day adds up to big results.'
];

module.exports = {
  name: 'quote',
  aliases: ['motivate'],
  description: 'Get a motivational quote',
  async run(ctx) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)] || t(ctx.lang, 'noQuote');
    await ctx.reply(t(ctx.lang, 'quote', { quote }));
  }
};
