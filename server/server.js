const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', '/public')

app.use(express.static(publicPath));

app.listen(4001, () => {
    console.log('Server is up at port 4001. Please visit http://localhost:4001 to view the app.');
});