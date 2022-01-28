

// class Animal {
//     //Метод конструктор для инициализации параметров
//     constructor(options) {
//         this.name = options.name;
//         this.age = options.age;
//         this.hasTail = options.hasTail;
//     }

//     voice() {
//         console.log("I am animal");
//     }

//     static type = 'ANIMAL'
// }

// let animal = new Animal({
//     name: "animal",
//     age: 5,
//     hasTail: true,
// });


// class Cat extends Animal {
//     static type = 'CAT'

//     constructor(options) {
//         super(options)
//         this.color = options.color;
//     }

//     voice() {
//         super.voice()
//         console.log("I am cat")
//     }

//     get ageInfo() {
//         return this.age * 7;
//     }

//     set ageInfo(newAge) {
//         this.age = newAge;
//     }
// }

// let cat = new Cat({
//     name: "cat",
//     age: 7,
//     hasTail: true,
//     color: "black",
// });




//#################################################################





// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = "none";
//     }

//     show() {
//         this.$el.style.display = "block";
//     }
// }

// class Box extends Component {
//     constructor(options) {
//         super(options.selector)

//         this.$el.style.width = this.$el.style.height = options.size + "px";
//         this.$el.style.background = options.color;
//     }
// }


// let box1 = new Box({
//     selector: `#box1`,
//     size: 100,
//     color: 'darkcyan',
// })

// let box2 = new Box({
//     selector: `#box2`,
//     size: 150,
//     color: 'blueviolet',
// })

// class Circle extends Box {
//     constructor(options) {
//         super(options)

//         this.$el.style.borderRadius = "50%"
//     }
// }

// let circ = new Circle({
//     selector: `#circle1`,
//     size: 100,
//     color: 'cornflowerblue',
// })




//#################################################################


//Добавляем в конструктор разные параметры

class User {
    constructor(options) {
        this.login = options.login
        this.password = options.password
    }

    loginInfoShow() {
        console.log(`Ваш логин:${this.login} Ваш пароль:${this.password}`);
    }

    validatePassword() {
        if (this.password.length >= 6) {
            return true;
        } else {
            return false;
        }
    }
}

let user1 = new User({
    login: 'test@mail.com',
    password: '123456789',
});

//Добавляем в конструктор конкретные параметры

class UserAnother {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    loginInfoShow() {
        console.log(`Ваш логин:${this.login} Ваш пароль:${this.password}`);
    }

    validatePassword() {
        if (this.password.length >= 6) {
            return true;
        } else {
            return false;
        }
    }
}

let user2Login = "random@gmail.com"
let user2Password = '0000';

let user2 = new UserAnother(user2Login, user2Password);


//Расширяем класс


class Admin extends User {
    constructor(options) {
        //добавляем старые свойства конструктора перед добавлением новых
        super(options);

        this.rang = options.rang;
    }

    validatePassword() {
        super.validatePassword()  //Обращение к функции роидетьского класса так же через super
        if (this.password.length >= 10) {
            return true;
        } else {
            return false;
        }
    }
}

let admin1 = new Admin({
    login: 'admin@mail.com',
    password: '11111111111111111',
    rang: 10,
})
