const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.static(publicPath));

app.listen(4000, () => {
    console.log('Server is up at port 4000. Please visit http://localhost:4000 to view the app.');
});