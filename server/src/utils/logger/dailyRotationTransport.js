const { transports } = require('winston');
require('winston-daily-rotate-file');
const fs = require('fs');

const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const createDailyRotationTransport = envs => {
  if (envs && !envs.includes(process.env.NODE_ENV)) return null;

  return new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-results.log`,
    datePattern: 'YYYY-MM-DD',
    maxFiles: '7d'
  });
};

module.exports = createDailyRotationTransport;
