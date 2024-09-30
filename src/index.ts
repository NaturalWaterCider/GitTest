import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('文字列を入れてね', line => {
    const num = Number(line);

    if(Number.isNaN(num)){
        console.log("べー");
    }
    else{
        let message = num > 100 ? `${num}は100を超えるよ` : 980
        console.log(message = 'hoge');

    }
    rl.close();
});