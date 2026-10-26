const { t } = require('../lib/i18n');

module.exports = {
  name: 'menu',
  aliases: ['help', 'commands'],
  description: 'Show available commands',
  async run(ctx) {
    const { lang, settings, reply } = ctx;
    const body = [
      t(lang, 'menuTitle', { bot: settings.BOT_NAME }),
      '',
      t(lang, 'menuIntro'),
      '',
      `╭─「 ${t(lang, 'menuGeneral')} 」`,
      t(lang, 'menuLines'),
      '╰────────────────────'
    ].join('\n');
    await reply(body);
  }
};
