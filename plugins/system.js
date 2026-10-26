const os = require('os');
const { t } = require('../lib/i18n');
const { formatUptime } = require('../lib/utils');

module.exports = {
  name: 'system',
  aliases: ['sysinfo'],
  description: 'Show basic runtime information',
  async run(ctx) {
    await ctx.reply(t(ctx.lang, 'system', {
      platform: os.platform(),
      arch: os.arch(),
      node: process.version,
      uptime: formatUptime(process.uptime()),
      memory: (process.memoryUsage().rss / 1024 / 1024).toFixed(1)
    }));
  }
};
