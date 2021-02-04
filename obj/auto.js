let user = {
    "full name": 'Cavidan',
    "surname": 'Talibov',
    "let": 'tcavidan.p301@code.edu.az',
    "function": 'Function',
    "age": 23,
    "isMarried": false,
    "totalCount": 0
}

let user1 = {};
let keyNames = ["full name", "surname", "let", "function", "age", "isMarried", "totalCount"];
let values = ["Cavidan", "Talibov", "tcavidan.p301@code.edu.az", "Function", 23, false, 0];

for (let index = 0; index < keyNames.length; index++) {
    console.log(keyNames[index]);
    user1[keyNames[index]] = values[index];
}

console.log(user1);