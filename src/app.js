const express = require("express");
const{handler, error404} = require('./errors');
const app = express();
const router = require("./routes/user.route");

//let us call some inbuilt express wares

app.use(
  express.json({
    limit: "100mb",
    extended: true,
  })
)
app.use(
  express.urlencoded({
    limit: "100mb",
    extended: true,
  })
);

app.use((req, res, next) => {
  console.log("request received", req.method, req.ur1);
  next();
});

//error handlers
app.use("/api", router);
app.use("*", error404);
app.use(handler);

module.exports = app;
