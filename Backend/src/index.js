const express = require('express');


const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello backend')
})

app.listen( PORT, () => { console.log( "hello server" ) } );