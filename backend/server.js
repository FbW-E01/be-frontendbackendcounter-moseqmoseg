import express from 'express';
import cors from 'cors';
let counter = 0

const app = express()
const server = app.listen(3000, () => console.log('Running…'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', function(req, res) {

    res.send(counter.toString())
});

app.post('/counter', function(req, res) {
    console.log("increased");
    res.send((++counter).toString())
})