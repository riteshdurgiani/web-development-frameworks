const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')

//synchronous approach
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('./content/writeFile.txt', `Here is the result :
${first} , ${second}
`, { flag: 'a' })

console.log("ASYNCHRONOUS METHODS ")
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        return;
    }
    //console.log(result)
    const firstText = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            return
        }
        const second = result

        writeFile('./content/result-async.txt', `Here is the result :
        ${first} , ${second}
        `, (err, result) => {
            if (err) {
                return
            }
            console.log(result)
        })
    })
})