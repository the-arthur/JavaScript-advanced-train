


async function f1() {
    let response = await fetch(`./test.php?d=1`)
    return response.text()
    // .then(data => {
    //     return data.text();
    // })
    // .then(data => {
    //     console.log(data);
    // });
}

async function f2() {
    let response = await fetch('./test.php?d=2')
    return response.text()

}

async function f3() {
    let response = await fetch('./test.php?d=3')
    return response.text()
}

async function go() {
    let a = await f1();
    console.log(a);
    let b = await f2();
    console.log(b);
    let c = await f3();
    console.log(c);
}

go();


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// const fetchData = new Promise((resolve, reject) => {
//     resolve({ data: ['Jack', 'Max', 'Leo'] })
// })

// function getNamesData() {
//     fetchData.then((data) => {
//         console.log(data);
//         return 'done';
//     })
// }

// async function getNamesData2() {
//     console.log(await fetchData);
//     return 'done';
// }

// getNamesData()
// getNamesData2()

// console.log(getNamesData())
// console.log(getNamesData2())


//Промис + async awain и try catch

// const fetchData = () => Promise.resolve('some error...');
// const getNamesData = async () => {
//     try {
//         console.log(await fetchData());
//     } catch (error) {
//         console.log(error);
//     }
// }

// getNamesData()




const load = () => {
    Promise.resolve(5)
        .then(a => {
            Promise.resolve(10)
                .then(b => {
                    console.log(a + b);
                })
        })
}

load()

const load2 = async () => {
    const a = await Promise.resolve(5);
    const b = await Promise.resolve(10);
    console.log(a + b);
}

load2()


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// 1 Создаю промис эмитирующий получение даты с сервера
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

// 2 Вывожу данные в консоль:

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