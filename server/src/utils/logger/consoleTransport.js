const { format, transports } = require('winston');

const createConsoleTransport = envs => {
  if (envs && !envs.includes(process.env.NODE_ENV)) return null;

  return new transports.Console({
    level: 'info',
    format: format.combine(
      format.colorize(),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    )
  });
};

module.exports = createConsoleTransport;
