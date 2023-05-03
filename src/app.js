const express = require("express");
const { handler, error404 } = require('./errors');
const comment = require('./routes/comment.route');
const post = require('./routes/post.route');
const user = require('./routes/user.route');
const app = express();




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
app.use("/api/comments", comment);
app.use("/api/posts", post);
app.use("/api/users", user);
app.use("*", error404);
app.use(handler);

module.exports = app;
