const fs = require("fs");
const os = require("os");


console.log("CPU Core: " + os.cpus().length);

// fs.writeFileSync("./out/test.txt","File content here by Async!!!!");
// console.log(resp);

// fs.writeFile("./out/test.txt","Added content here by sync!!!!", (err) => {
//     if(err) throw error;
//     else console.log('File saved!');
// });


fs.appendFileSync("./out/test.txt",`${Date.now()}: appendFileSync!\n`);

fs.appendFile("./out/test.txt",`${Date.now()}: appendFile!\n`, (err) => {
    if(err) throw error;
    else {
        fs.cpSync("./out/test.txt","./out/test_cp.txt");
        //console.log('File saved!');
        //console.log(fs.statSync("./out/test.txt"));
    }
});

//fs.unlinkSync("./out/test.txt");

// fs.unlink("./out/test.txt", (err) => {
//     console.log("File error!");
// });
//const content = fs.readFileSync("./out/test.txt", "utf-8");
//console.log(content);

fs.readFile("./out/test.txt", "utf-8", (err, result) => {
    if(err) console.log("File error# " + err);
    else console.log(result);
});