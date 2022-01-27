

// Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.


// const person = new Object({
//     name: "maxim",
//     age: 25,
//     greet: function () {
//         console.log("Privet")
//     }
// })

// Object.prototype.sayHello = () => {
//     console.log('hello');
// }

// const lena = Object.create(person);


// const str = new String('i am string');


// const myDate = new Date();

// console.log(myDate);


// function Auto() {
//     console.log('наша машина')
// }

// const Bmw = new Auto();
// console.log(Bmw);


let a = {
    name: 'Arthur',
    color: 'black',
    bold: 'true',
    show: function () {
        console.log(this.name);
    }
}

let b = {
    fontsize: "24px",
    __proto__: a
}

let c = {
    fontfamily: "Verdana",
    __proto__: b
}

console.log(c.hasOwnProperty("fontfamily"));


let person = {
    name: "Huila",
    age: 22,
}


let person2 = Object.create(person, {
    color: {
        value: 'black'
    }
});

person2.color2 = "blue";


// Добавление функции во все прототипы обьектов
Object.prototype.sayHello = () => {
    console.log("XYU");
}

// новый Пустой обьект
let person3 = new Object();

person3.city = "Moscow";

person3.country = "Russia";

person3["First words"] = "Hellow world!"

console.log(person3);

// удалить ключ из обьекта
delete person3.country;
delete person3["First words"];
console.log(person3);

let person4 = person;

person4.age = 28;

// Дублированпе обьектов 

Object.assign

let userInfo = {
    name: "Vasya",
    age: 30,
}

// Копирует обьект
let user = Object.assign({}, userInfo);

user.age = 18;

// Добавляет прототип новому обьекту
let user2 = Object.create(userInfo, {});

user2.age = 99;

//Добавление ключей объекту через Object.assign
Object.assign(userInfo, {
    city: "Moscow",
    state: "Moscow region",
})

// Проверка есть ли свойство в обьекте
if ("name" in userInfo) {
    console.log(userInfo.name);
}

if (userInfo.age) {
    console.log(userInfo.age);
}

//Функция конструктор , пишется с большой буквы

function LoginInfo(name, password) {
    // this = {} создает пустой обьект
    this.name = name;
    this.password = password;
    //return this пустой побьект
}

let admin = new LoginInfo("Arthur", "1234");

let admin2 = new LoginInfo("Sonya", "0000");