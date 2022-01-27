




// console.log('Request data...');

//Без промисов:

// window.setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     window.setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data recieved', backendData)
//     }, 3000)
// }, 3000)

//с Промисом

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aps',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 3000);
// })

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         window.setTimeout(() => {
//             data.modified = true;
//             // resolve(data);
//             reject();
//         }, 3000)
//     });
// })
//     .then(clientData => {
//         clientData.message = "leave me here :)"
//         console.log("Data recieved", clientData);
//         return clientData;
//     })
//     .then(data2 => {
//         window.setTimeout(() => {
//             data2.modified = "12.12.21"
//             console.log('SURPRISE :) Data modified', data2);
//             return data2;
//         }, 3000)
//     })
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



// Другой урок


let a = 7;

let laal = new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 99;
        resolve();
    }, 3000);
})

laal.then(() => {

})
    .catch(() => {
        console.error('Ошибка!')
    })
    .finally(() => {
        console.log(a);
    })