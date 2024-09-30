for(const i of sequence(1,100)){
    const message = getFizzBazzString(i);
    console.log(message);
}

function getFizzBazzString(i: number): string {
    const fizz = "Fizz";
    const buzz = "Buzz";

    if(i % 3 === 0 && i % 5 === 0){
        return fizz + buzz;
    }    
    else if(i % 3 === 0){
        return fizz;
    }
    else if(i % 5 === 0){
        return buzz;
    }
    else{
        return String(i);
    }


}
function sequence(arg0: number, arg1: number) {
    return [...Array(arg1)].map((_, i) => i + arg0);
}

