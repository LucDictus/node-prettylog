const express = require('express');
const prettyLog = require('pretty-log');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    prettyLog.success('Ontvangen GET request op /');

    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  prettyLog.success(`Server is running at http://localhost:${port}`);
});
