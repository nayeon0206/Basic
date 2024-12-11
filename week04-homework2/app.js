import express from "express";

const app = express();
const port = 3000;

app.get("./", (req, res) => {
    res.send("안녕하세요");
})

app.get('/api/players', (req, res) => {
    return res.json({player});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const player = [
    {
        name: "손흥민",
        speed: 100,
        grade: "ss"
    },
    {
        name: "히딩크",
        speed: 95,
        grade: "ss"
    }
]