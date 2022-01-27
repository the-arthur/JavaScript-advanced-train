

console.log('start');

console.log('start2');

// setTimeout Вызывается в браузере а не в JS

window.setTimeout(function () {
    console.log('inside timeout')
}, 2000);

setTimeout(function () {
    console.log('inside timeout')
}, 2000);

console.log('end')


