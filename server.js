const express = require("express");
const app = express();
const Post = require("./api/Routes/Post");

app.use(express.json({ extended: false }));

app.use("/api/Post", Post);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));