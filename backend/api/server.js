import express, { request, response } from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";
const __dirname = path.resolve();
console.log(__dirname);

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("We only works with endpoints '/api/artists' and '/api/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// app.use(express.static("../../frontend/dist"));
// app.get("*", async (request, response) => {
//   response.sendFile("../../frontend/dist/index.html");
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
