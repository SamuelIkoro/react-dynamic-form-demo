import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, ()=> { console.log('Listening on port', port); })