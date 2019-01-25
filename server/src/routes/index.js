const { Router } = require('express');

const router = Router();

router.get('/', (req, res) =>
  res.status(200).json({ success: true, msg: 'Hello!' })
);

router.get('/ping', (req, res) =>
  res.status(200).json({ success: true, msg: 'Pong' })
);

module.exports = router;
