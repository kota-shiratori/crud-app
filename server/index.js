import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Expressサーバー起動");
});

app.listen(PORT, () => {
    console.log(`サーバーがポート${PORT}で起動`);
});

