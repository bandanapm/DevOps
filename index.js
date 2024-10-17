const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve a simple "Hello World" page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
