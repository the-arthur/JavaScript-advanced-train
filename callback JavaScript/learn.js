

// function myFunc(callback) {
//     const a = [4, 5, 6];
//     let element = document.querySelector(".out-1");
//     callback(element, a);
// }

// function out(elem, arr) {
//     elem.innerHTML = arr.join(" ");
// }

// function out2(elem, arr) {
//     elem.innerHTML = arr.join("-");
// }

// myFunc(out2)




//::::::::::::::::::::::::::::::::::::::::::::::::

const button = document.querySelector("button")

function toggle() {
    button.classList.toggle('alt-color');
}

// toggle();


button.addEventListener("click", toggle);



//::::::::::::::::::::::::::::::::::::::::::::::::


function firstAction(callback) {
    console.log('im the first action');
    setTimeout(callback, 3000);
}

function secondAction() {
    console.log('im the second action');
}


setTimeout(() => firstAction(secondAction), 3000);



//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


function first() {
    console.log(1);
}

function second() {
    console.log(2);
}


first()
second()