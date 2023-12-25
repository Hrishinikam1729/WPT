const fs = require("fs");

//Sync...CALL
fs.writeFileSync('./test.txt', "Hello,WOrld");


//ASYNC ....CALL

fs.writeFile("./test.txt", "Hello WOrld Async", (err) => {})

const result = fs.readFileSync('./test.txt', 'ascii');
console.log(result)


const result1 = fs.readFile('./Hello.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(result);
    }
})

console.log(result1);


// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString);
fs.appendFileSync('./test.txt', `Hey There!!\n`);

fs.cpSync('./test.txt', './cpoy.txt');

fs.unlinkSync('./cpoy.txt')


console.log(fs.statSync("./Hello.txt"));

// fs.mkdirSync("hrishi")
fs.mkdirSync("Hrishi1/a/b", { recursive: true });