const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("./src/public"));

app.use(router);

app.listen(8080);

// https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
