

// const person = {
//     name: "maxim",
//     age: 25,
//     greet: function () {
//         console.log("Privet")
//     }
// }


//ПРОТОТИПЫ!!!!

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

// //ЗАМЫКАНИЯ!!!!!!!!

// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }

// const calc = createCalcFunction(42);

// calc();


// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     }
// }

// const addOne = createIncrementor(1);

// console.log(addOne(10));




// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator(`com`);
// const ruUrl = urlGenerator(`ru`)

// console.log(ruUrl(`yandex`));

// console.log(comUrl(`netflix`));





// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
// const person2 = { name: 'Елена', age: 19, job: 'SMM' }

// bind(person1, logPerson)()
// bind(person2, logPerson)()



//АСИНХРОННОСТЬ 

// Promise

// console.log('Request data...');

// window.setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aps',
//         port: 2000,
//         status: 'working'
//     }

//     window.setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recieved', backendData)
//     }, 3000)
// }, 3000)

// const p = new Promise(function (resolve, reject) {
//     window.setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aps',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData);
//     }, 3000);
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         window.setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 3000)
//     });
// }).then(clientData => {
//     clientData.message = "leave me here :)"
//     console.log("Data recieved", clientData);
//     return clientData;
// }).then(data2 => {
//     window.setTimeout(() => {
//         data2.modified = "12.12.21"
//         console.log('SURPRISE :) Data modified', data2);
//         return data2;
//     }, 3000)
// })
//     .catch(err => console.error("Error:", err))
//     .finally(() => {
//         console.log('finally')
//     })


// var sleep = (ms) => new Promise((resolve) => {
//     setTimeout(() => { resolve() }, ms)
// })

// sleep(2000).then(() => { console.log('After 2 sec') })
// sleep(3000).then(() => { console.log('After 3 sec') })

// Promise.all([sleep(2000), sleep(3000), sleep(4000)]).then(() => {
//     console.log("All Promises done")
// })

// Promise.race([sleep(2000), sleep(3000), sleep(4000)]).then(() => {
//     console.log("Race Promises done")
// })


class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none';
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = option.size + 'px    '
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})