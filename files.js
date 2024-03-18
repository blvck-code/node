const fs = require("fs");

// read files
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log(123);

// write files
// fs.writeFile("./docs/blog2.txt", "hello world", () => {
//   console.log("complete");
// });

// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//   console.log("complete");
// });

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// deleteing files

if (fs.existsSync("./docs/delete.txt")) {
  fs.unlink("./docs/delete.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  fs.writeFile("./docs/delete.txt", "", () => {
    console.log("create delete file");
  });
}
