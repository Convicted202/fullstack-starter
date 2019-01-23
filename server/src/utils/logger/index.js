const { createLogger, format } = require('winston');
require('winston-daily-rotate-file');

const consoleTransport = require('./consoleTransport');
const dailyRotationTransport = require('./dailyRotationTransport');

// change level if in dev environment versus production
const loggerLevel = process.env.NODE_ENV === 'development' ? 'debug' : 'info';

const _logger = createLogger({
  level: loggerLevel,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.json()
  ),
  transports: [
    consoleTransport(),
    dailyRotationTransport(['production'])
  ].filter(transport => !!transport)
});

const _stream = {
  write: function(message) {
    _logger.info(message.trim());
  }
};

module.exports = { ..._logger, stream: _stream };
