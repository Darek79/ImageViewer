const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("./src/public"));

app.use(router);

app.listen(8080);

// https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
// https://stackoverflow.com/questions/15772394/how-to-upload-display-and-save-images-using-node-js-and-express
// https://stackoverflow.com/questions/31530200/node-multer-unexpected-field
// https://code.tutsplus.com/tutorials/file-upload-with-multer-in-node--cms-32088
