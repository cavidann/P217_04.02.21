// // let user = {
// //     "full name": 'Cavidan',
// //     "surname": 'Talibov',
// //     "let": 'tcavidan.p301@code.edu.az',
// //     "function": 'Function',
// //     "age": 23,
// //     "isMarried": false,
// //     "totalCount": 0
// // }



// // let codes = {
// //     "+49": "Germany",
// //     "+41": "Switzerland",
// //     "+44": "Great Britain",
// //     // ..,
// //     "+1": "USA"
// // };

// // for (let code in codes) {
// //     console.log((+code).toString()); // 1, 41, 44, 49
// // }



// // let keyNames = ["full name", "surname", "let", "function", "age", "isMarried", "totalCount"];
// // let values = ["Cavidan", "Talibov", "tcavidan.p301@code.edu.az", "Function", 23, false, 0];


// // let user = {}

// // for (let index = 0; index < keyNames.length; index++) {
// //     user[keyNames[index]] = values[index]
// // }
// // console.log(user);

// // let message = "Hello!";
// // let phrase = message;

// // phrase = 'Prase'
// // console.log(message, phrase);

// let message = {
//     txt: "Hello!",
//     user: {

//         surname: 'Talibov'
//     }
// }



// message.user.name;

// // Object.assign(message, phrase, phrase2)


// // message = {...phrase }

// // let arr = [1, 2, 3];
// // console.log(arr);
// // console.log(...arr);

// // let clone = _.cloneDeep(message);

// // clone.user.name = "Nermine";

// // console.log(message, clone);

// // let clone = JSON.parse(JSON.stringify(message));

// // clone.user.name = "Nermine";


// // console.log(message, clone);

// // let user = {
// //     name: '',
// // }; // user has no address

// // if (user.address ? .street) {
// // console.log(user.address ? .street);
// // }

// // let data = Symbol('loding');

// // let products = {
// //     [data]: 'iphone',
// //     name: 'as'
// // }

// // let id = Symbol("id");

// // let use = {
// //     name: "John",
// //     [Symbol("id")]: 123 // not "id": 123
// // };

// // console.log(use);

// // for (const key in products) {
// //     console.log(key)
// // }

// // console.log(products);

// // function User(name) {
// //     this.name = name;
// //     this.isAdmin = false;
// // }

// // let user = new User("Jack");
// // let user1 = new User("Jack1");

// // console.log(user, user1);

// // class User {

// //     constructor(name) {
// //         // invokes the setter
// //         this.name = name;
// //     }

// //     get name() {
// //         return this._name;
// //     }

// //     set name(value) {
// //         if (value.length < 4) {
// //             alert("Name is too short.");
// //             return;
// //         }
// //         this._name = value;
// //     }

// // }

// // let user = new User("John");
// // alert(user.name); // John

// // user = new User(""); // Name is too short.

// // class User {

// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHi() {
// //         alert(this.name);
// //     }

// // }

// // // Usage:
// // let user = new User("John");
// // user.sayHi();

// // let name = Symbol('name');
// // let surname = Symbol.for('surname');

// // let user = {
// //     [name]: 'Cavidan',
// //     surname: 'Talibov',
// //     phone: '090897',
// //     password: '1234567Gh',
// //     // confirmPassword: user.password
// //     checkPassword() {
// //         console.log(this.password);
// //     }
// //     // confirmPassword: this.password
// // }

// // let user2 = user;
// // user = null;

// // user2.checkPassword();
// // user.checkPassword();

// // let user = {
// //     firstName: "Ilya",
// //     sayHi() {
// //         let arrow = () => alert(this.firstName);
// //         arrow();
// //     }
// // };

// // let user = {
// //     firstName: "Ilya",
// //     sayHi() {
// //         this.firstName
// //         let arrow = () => console.log(this);
// //         // arrow();
// //     }
// // };

// // // let arrow = () => console.log(this);

// // // user.sayHi()

// // function sayHi() {
// //     console.log(this);
// //     // arrow();
// // }
// // sayHi();

// function Environment(humidity, humanDensity) {
//     console.log(this);
//     this.lightness = 80;
//     this.humidity = humidity;
//     this.humanDensity = humanDensity
// }

// let city1 = new Environment(50, 70);
// let city2 = new Environment(10, 25);

// console.log(city1.humidity, city2.humidity);


// let instructor = new function() {
//     this.name = "Cavidan";
//     this.age = 23;
//     this.stregth = 0;

//     // ...other code for user creation
//     // maybe complex logic and statements
//     // local variables etc
// };


// console.log(user);



// let course = new function() {
//     this.name = 'Code Academy';
//     this.location = '28 May';
//     this.room = [

//         new Room('Jupiter', 15, [
//             new Student('Freedi', 'Habibi', 29, 'Male'),
//             new Student('Vugar', 'Guliyev', 26, 'Male')
//         ]),

//         new Room('Saturn', 20, [
//             new Student('Mehriban', 'Asgarova', 27, 'Female'),
//             new Student('Ramiz', 'Abbasov', 16, 'Male')
//         ])

//     ];
// }


// function Room(name, area, students) {
//     this.name = name;
//     this.area = area;
//     this.students = students;
// }

// function Student(name, surname, age, gender) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.gender = gender;
// }

// console.log(course);

class User {

    constructor(name) {
        this.name = name;
    }

    get name1() {
        return 'salam ' + this._name;
    }

    set name(val) {
        this._name = val;
    }


    sayHi() {
        alert(this.name + ' ' + this.surname);
    }


}

let user = new User("Cavidan", "Talibov");
let user1 = new User("Cavidan1", "Talibov1");


console.log(user1.name1);
user1.name = 'Jack';