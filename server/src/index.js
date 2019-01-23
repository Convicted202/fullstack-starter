const express = require('express');
const app = express();
const MorganLogger = require('./utils/logger/morganLogger');
const Logger = require('./utils/logger');

app.use(MorganLogger);

app.get('/ping', function(req, res) {
  res.status(200).json({ msg: 'Pong', success: true });
});

app.listen(3001, function() {
  Logger.info('Example app listening on port 3000!');
});
