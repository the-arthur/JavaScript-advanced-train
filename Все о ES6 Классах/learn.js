

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





