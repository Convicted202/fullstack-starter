const express = require('express');
const app = express();

app.get('/ping', function(req, res) {
  res.status(200).json({ msg: 'Pong', success: true });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
