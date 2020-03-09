const fs = require("fs");

fs.readdir(process.cwd(), (err, filenames) => {
  // err === an error object, which means something went wrong
  // err === nell, which means everything is OK

  if (err) {
    //throw new Error(err);
    console.log(err);
  }

  console.log(filenames);
});
