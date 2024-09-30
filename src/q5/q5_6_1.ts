class User1{
    private readonly name: string;
    readonly #age: number;

    constructor(name: string, age: number){
        if(name === ""){
            throw new Error("名前空にできないよ")
        }

        this.name = name;
        this.#age = age;
    }

    public getMessage(message:string){
        return `${this.name}(${this.#age}) 「${message}」`;
    }
}

const hoge = new User1("hoge", 16);
console.log(hoge.getMessage("hello"));
