




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



//((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))



//     Зачем вообще придумали promises? Если какая-то операция выполняется долго, то есть асинхронно, то ее нельзя просто написать с помощью синхронного кода в javascript. Поэтому для этого и используют промисы. По русски promises переводятся, как обещания. Самые частые примеры промисов это setTimeout, получение данных с сервера, запись в файл и другие.

// Итак как же выглядит промис?

// const promise = new Promise()
// Это минимальная запись промиса. Мы просто создаем новый екземпляр класса Promise. В качестве аргумента мы можем передать функцию с параметрами resolve и reject.

// const promise = new Promise((resolve, reject) => {

// })

// Resolve и reject - это тоже функции. Мы вызываем resolve внутри, когда говорим, что промис завершился успешно, а reject, когда мы хотим сказать, что случилось что-то неожиданное, например ошибка.

// Давай напишем условие, в котором вызовем функцию resolve с агрументом hello world. В else вызовем reject.

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('hello world')
    } else {
        reject('ups!')
    }
})
// Как вы понимаете у нас всегда вызывается resolve.

// Теперь нам нужно как то подписаться на то, что произошло внутри промиса. Для этого мы будем использовать then и catch. Then будет вызыватся на resolve, а catch на reject.

// Давайте добавим два обработчика

promise.then(data => console.log('success: ', data))
promise.catch(error => console.log('error: ', error))
// В каждый из них мы передали callback, в первом первым аргументом идут данные, которые мы передали в resolve, а в error ошибка

// Если мы посмотрим в браузер, то у нас вывелось

// success: hello world
// Если мы исправим true на false в условии, то увидим, что у нас вывалился error


const getInfo = new Promise((resolve, reject) => {
    console.log('Получаю данные...')
    setTimeout(() => {
        let data = {
            name: "Arthur",
            age: 28,
        }
        resolve(data);
    }, 5000)
})

//Способ 1 Через промис
let showInfo = () => {
    getInfo.then((info) => {
        console.log('Данные получены:')
        console.log(info);
    })
}


//Способ 2 Через Async Await
const showInfoAsync = async () => {
    let info = await getInfo;
    console.log('Данные получены:')
    console.log(info);
}

showInfo()
showInfoAsync()





