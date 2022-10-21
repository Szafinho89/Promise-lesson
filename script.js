const test = new Promise((resolve, reject) => {
    if (!true) {
        resolve('jest ok')
    } else {
        reject('błąd Panie')
    }
})

test
    .then(info => console.log(info))
    .catch(errr => console.log(errr))