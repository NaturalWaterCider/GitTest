const input = "";
const whoName = input ? input : "nanashi";
// 型名指定
type FooBarObj = {
    whoName: string,
    foo: string,
    bar: string,
};
// 宣言
// 割と自由
const obj: FooBarObj = {
    whoName,
    foo : "123",
    "bar": "baaaaa",
};

console.log(obj.whoName);
console.log(obj.foo);
console.log(obj.bar);
console.log(obj["bar"]);

const obj2 = {
    bar : -999,
    baz : -9999,
}

// スプレッド構文
// プロパティになるオブジェクトたちはコピーされる点が重要
const obj3 = {
    ...obj,
    ...obj2
}

console.log(obj3);

type PriceData = {
    readonly [key: string]: number,
}

const data1: PriceData = {
    apple: 120,
    coffee: 220,
    //これはエラー bento: "弁当"
}

//これがエラーにならなくてやばい
//num にはundefined(!=number型)が入るので型安全にならない
const num: number = data1.num;

console.log(typeof data);

//部分型
//分割代入