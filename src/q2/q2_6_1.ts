const fizz = "Fizz";
const buzz = "Buzz";
let result :string = "";

for(let i:number = 1;i <= 100;i++){
    if(i % 3 === 0 && i % 5 === 0){
        result += fizz + buzz;
    }    
    else if(i % 3 === 0){
        result += fizz;
    }
    else if(i % 5 === 0){
        result += buzz;
    }
    else{
         result += i;
    }

    result += " ";
}

console.log(result);