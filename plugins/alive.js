const os = require('os');
const { t } = require('../lib/i18n');
const { formatUptime } = require('../lib/utils');

module.exports = {
  name: 'alive',
  aliases: ['status', 'runtime'],
  description: 'Check whether the bot is online',
  async run(ctx) {
    const memory = (process.memoryUsage().rss / 1024 / 1024).toFixed(1);
    await ctx.reply(t(ctx.lang, 'alive', {
      bot: ctx.settings.BOT_NAME,
      uptime: formatUptime(process.uptime()),
      memory,
      platform: `${os.platform()} ${os.arch()}`,
      version: ctx.settings.VERSION
    }));
  }
};
