require('dotenv').config({ path: './config.env' });

module.exports = {
  BOT_NAME: process.env.BOT_NAME || 'SHANEX IMPERION BOT',
  OWNER_NAME: process.env.OWNER_NAME || 'Shanuka Umanga',
  OWNER_NUMBER: (process.env.OWNER_NUMBER || '').replace(/\D/g, ''),
  PREFIX: process.env.PREFIX || '.',
  PORT: Number(process.env.PORT || 8000),
  SEND_OWNER_CONNECT_NOTICE: String(process.env.SEND_OWNER_CONNECT_NOTICE || 'false').toLowerCase() === 'true',
  VERSION: require('./package.json').version
};
