const express = require("express");

// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// app.set('views', 'myviews')

// listen to request
app.listen(8000);

app.use((req, res, next) => {
  console.log("new request made: ");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.get("/", (req, res) => {
  // res.send('<p>Home page</p>')
  //   res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.send('<p>About us page</p>')
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blog/create", (req, res) => {
  res.render("");
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page, it has to be at the bottom most
app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
