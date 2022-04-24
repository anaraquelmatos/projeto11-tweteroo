import express from "express";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuario = [];

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

app.listen(5000);