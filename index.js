import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuario = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    usuario.push({ username: username, avatar: avatar });
    res.status(200).send("OK");
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const infos = usuario.find(elemento => elemento.username === username);
    tweets.push({ username: username, avatar: infos.avatar, tweet: tweet });
    res.status(200).send("OK");
})

app.get("/tweets", (req, res) => {
    const ultimosTweets = tweets.slice(-10);
    res.send(ultimosTweets);
})

app.listen(5000);