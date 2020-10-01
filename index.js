const express = require('express');
const routes = require('./routes');

const app = express();
app.use('/', routes);

app.listen(3001, () => {
    console.log('Server started listening on PORT http://localhost:3001');
});
