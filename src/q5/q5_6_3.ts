function createUser(name: string, age: number){
    return (message: string) =>{
        return `${name}(${age}) 「${message}」`;
    }
}

const getMessage = createUser("hoge", 16);

console.log(getMessage("hello"));