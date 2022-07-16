console.log('Task Manager App');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'hello wolrd' });
});

app.listen(3000, () => {
  console.log('hello world');
});
