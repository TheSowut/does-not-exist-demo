import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
    res.json({
        message: `App is running on a docker container.`,
        imageUrl: 'http://www.localhost:8080/image'
    });
});

app.get("/image", async (_, res) => {
    console.log("Making a request to thispersondoesnotexist...");
    const blob = await fetch("https://thispersondoesnotexist.com/", {
        mode: "cors",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
        },
    });

    console.log(`Response status: ${res.statusCode}`);
    res.type(blob.type);
    console.log(res);
    blob.arrayBuffer().then((buf) => {
        res.send(Buffer.from(buf));
    });
});

app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});
