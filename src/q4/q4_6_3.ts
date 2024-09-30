function map<T, U>(array: T[], callback: (value: T) => U):U[]{
    const result : U[] = [];
    for(const i of array){
        result.push(callback(i));
    }

    return result;
}

const data2 = [1, 1, 2, 3, 5, 8, 13];

const result2 = map(data2, (x) => x * 10);
console.log(result2);

const data3 = [1, -3, -2, 8, 0 ,-1];

const result3 = map(data3, (x) => x >= 0);
console.log(result3);

//むっず