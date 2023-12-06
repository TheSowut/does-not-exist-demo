import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", (_, res) => {
  res.json({ message: `App is running on docker container.`});
});

app.get("/image", async (req, res) => {
  console.log("Making a request to thispersondoesnotexist");
  const blob = await fetch(
    "https://cors-anywhere.herokuapp.com/https://thispersondoesnotexist.com/",
    {
      mode: "cors",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    }
  );
  console.log(`Response status: ${res.statusCode}`);
  res.type(blob.type);
  blob.arrayBuffer().then((buf) => {
    res.send(Buffer.from(buf));
  });
});

app.get("/sample", async (req, res) => {
  res.sendFile("sample.jpg", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
