import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuario = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    if (username !== null && avatar !== null) {
        usuario.push({ username: username, avatar: avatar });
        res.status(200).send("OK");
        console.log(usuario);
    } else {
        res.send("Confira as informações repassadas!");
    }
})

app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    if (username !== null && tweet !== null) {
        const infos = usuario.find(elemento => elemento.username === username);
        tweets.push({ username: username, avatar: infos.avatar, tweet: tweet });
        res.status(200).send("OK");
        console.log(tweets);
    } else {
        res.send("Confira as informações colocadas!");
    }
})

app.get("/tweets", (req, res) => {
    const ultimos = tweets.slice(-10);
    res.send(ultimos);
    console.log(tweets);
})

app.listen(5000);