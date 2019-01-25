const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const logger = require('./utils/logger');
const attachTerminationHandlers = require('./utils/terminationHandlers');

const routes = require('./routes');

const app = express();

attachTerminationHandlers();

const APP_PORT = process.env.PORT || '3000';
const APP_HOST = process.env.HOST || '0.0.0.0';

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(cors());
app.use(helmet());
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(app.get('port'), function() {
  logger.info(`Example app listening on port ${app.get('port')}`);
});
