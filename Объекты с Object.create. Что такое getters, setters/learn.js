

// Проперти дискрипторы

//Object.create({Прототип},{Новые значения})

const person = Object.create(
    {
        calculateAge() {
            return new Date().getFullYear() - this.birthYear;
        }
    },
    {
        name: {
            value: 'Arthur',
            enumerable: true, //Что бы можно было пересчитать в цикле
            writable: true, // Что бы можно было вносить изменения
            configurable: true // что бы можно было удалять
        },
        birthYear: {
            value: '1993',
            enumerable: true,
            writable: true,
            configurable: true
        },
        age: {
            //Геттеры и Сеттеры:
            get() {
                return new Date().getFullYear() - this.birthYear;
            },
            set(value) {
                document.body.style.background = "blue";
                console.log(value);
            }
        }
    });

person.name = "Loh";

//Цикл по обьектам

for (let key in person) {
    //Проверяем значение только в обьекте а не в прототипе
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
}


// #####################################################################


//getters => acess properties
//setter => change properties

let human = {
    firstName: "Arthur",
    lastName: "Arthurov",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

human.fullName = "Sam Nicklson"

console.log(human);


// #####################################################################




let people = {
    name: "John",
    get greeting() {
        return `Hi my name is ${this.name}!`;
    },
    set addLastName(i) {
        this.name = this.name + ` ` + i;
    },
};


console.log(people.name);

people.addLastName = "Wick";

console.log(people.name);