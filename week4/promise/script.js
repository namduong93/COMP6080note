const fs = require("fs").promises;
const files1 = fs.readFile("file1.txt", "utf-8");
files1.then(data => {
    console.log(files1);
    console.log(data);
});

const files2 = fs.readFile("file2.txt", "utf-8");
files2.catch(err => {
    console.log(files2);
    console.log(err);
});
