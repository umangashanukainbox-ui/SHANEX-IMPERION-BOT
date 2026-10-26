const { t } = require('../lib/i18n');
const { setLanguage } = require('../lib/store');

module.exports = {
  name: 'language',
  aliases: ['lang'],
  description: 'Change reply language',
  async run(ctx) {
    const value = (ctx.args[0] || '').toLowerCase();
    const map = { '1': 'si', sinhala: 'si', si: 'si', '2': 'ta', tamil: 'ta', ta: 'ta', '3': 'en', english: 'en', en: 'en' };
    if (!value) {
      await ctx.reply(t(ctx.lang, 'choose', { bot: ctx.settings.BOT_NAME }));
      return;
    }
    const lang = map[value];
    if (!lang) {
      await ctx.reply(t(ctx.lang, 'invalidLanguage'));
      return;
    }
    setLanguage(ctx.chat, lang);
    await ctx.reply(t(lang, 'languageChanged'));
  }
};
