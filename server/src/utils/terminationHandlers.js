const logger = require('./logger');

module.exports = () => {
  process.on('uncaughtException', function(err) {
    const stack = err.stack ? `\n ${err.stack}` : '';

    logger.error('UncaughtException: ' + err.message + stack);

    process.exit(1);
  });

  process.on('unhandledRejection', function(reason) {
    const stack = reason.stack ? `\n ${reason.stack}` : '';

    logger.error('UnhandledRejection: ' + (reason.message || reason) + stack);

    process.exit(1);
  });

  process.on('SIGINT', () => {
    logger.warn('Application terminated on SIGINT');

    process.exit();
  });

  process.on('SIGTERM', () => {
    logger.warn('Application terminated on SIGTERM');

    process.exit();
  });
};
