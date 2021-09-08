const { readFile, writeFile, write } = require('fs')

//nodes native promisifying a function way
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

//another way
//using this way does not require anything else like other imports , etc
const { readFile } = require('fs').promises

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=>console.log(err))

//Refactoring to async await 
const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        console.log(first)
    } catch (error) {
        return
    }
}

//New start method using Promisfied method by nodes native one 
const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8')
        const second = await readFilePromise('./content/second.txt', 'utf-8')
        await writeFilePromise('./content/resultNew.txt', `THIS IS NEW TEXT FILE`)
        console.log(first, second)

    } catch (error) {
        console.log(error)
    }
}

start()