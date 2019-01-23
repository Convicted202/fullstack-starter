const morgan = require('morgan');

const WinstonLogger = require('./index');

module.exports = morgan('combined', { stream: WinstonLogger.stream });
