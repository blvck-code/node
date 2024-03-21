const http = require("http");
const fs = require("fs");
const _ = require('lodash')

const server = http.createServer((req, res) => {

  // lodash
  const num =  _.random(0, 20)
  console.log('Random ==>>', num)

  const greet = _.once( () => {
    console.log('Hello ')
  })

  greet()
  greet()

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200
      break;
    case "/about-blah":
      res.statusCode = 301
      res.setHeader('Location', '/about')
      res.end()
      break;
    default:
      path += "404.html";
      res.statusCode = 404
      break;
  }

  //   res.write("<p>Hello Niggah</p>");
  //   res.write("<h1>Hello Niggah</h1>");
  //   res.end();

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(8000, "localhost", () => {
  console.log("Listening on port 8000");
});
