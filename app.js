const express = require('express');
const md5 = require('md5');
const app = express();
const sha1 = require('js-sha1');
const { sha256 } = require('js-sha256');
const { sha512 } = require('js-sha512');

const port = process.env.PORT || 5000;

app.use(express.json());

// Encode-url
app.post('/encode-url', (req, res) => {
    const url = req.body.str;
    res.send(encodeURIComponent(url));
});


// Decode-url
app.post('/decode-url', (req, res) => {
    const url = req.body.str;
    res.send(decodeURIComponent(url)); 
});


//base64-encode
app.post('/base64-encode', (req, res) => {
    const str = req.body.str;
    res.send({str : `${Buffer.from(str).toString('base64')}`});
});

//base64-decode
app.post('/base64-decode', (req, res) => {
    const str = req.body.str;
    res.send(Buffer.from(str, 'base64').toString());
})

//md5
app.post('/md5', (req, res) => {
    const data = req.body.str;
    res.send(md5(data));
})

//sha-1
app.post('/sha-1', (req, res) => {
    const data = req.body.str;
    res.send(sha1(data));
})

//sha-256
app.post('/sha-256', (req, res) => {
    const data = req.body.str;
    res.send(sha256(data));
})

//sha-512
app.post('/sha-512', (req, res) => {
    const data = req.body.str;
    res.send(sha512(data));
})


app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});