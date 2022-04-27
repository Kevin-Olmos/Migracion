const express = require('express');
const app = express();
const port = 3000;
const routerTaqueria=require('./routes/taquerias.router');

app.get('/', (req, res) => {
    res.send('Hola mi server en express :)');
});

app.listen(port, () => {
    console.log('Mi port: ' + port);
});

app.use('/api/v1/taquerias',routerTaqueria);
