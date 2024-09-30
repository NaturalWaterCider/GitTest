//ユーザー型を作成
type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

//課題ここから
const rows = data.split('\n');
const users: User[] = [];
for(const row of rows){
    if(row === ''){
        continue;
    }

    const[name, ageStr, premiumUserStr] = row.split(',');
//    const age = Number(ageStr);
//    const premiumUser = premiumUserStr === '1';
    users.push({
        name,
        age:Number(ageStr),
        premiumUser:premiumUserStr === '1'
    });

}

//別解
// const users :User[] = data.split('\n')
//                     .filter(l => l !== '')
//                     .map(l =>{ 
//                         const[name, ageStr, premiumUserStr] = l.split(',');

//                         return {
//                             name,
//                             age: Number(ageStr),
//                             premiumUser:premiumUserStr === '1'
//                         }
//                     });

//課題ここまで

for(const user of users){
    if(user.premiumUser){
        console.log(`${user.name}(${user.age})はプレミアムユーザーです`);
    } else {
        console.log(`${user.name}(${user.age})はプレミアムユーザーではありません`);
    }
}

