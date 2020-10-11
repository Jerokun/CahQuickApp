const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('dist/cahquickapp'));

app.get('*', (req, res) => {
  const options = {
    root: path.join(__dirname, 'dist/cahquickapp'),
  };

  return res.sendFile('index.html', options);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
