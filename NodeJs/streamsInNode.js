// const { writeFileSync } = require('fs')
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/bigFile.txt', `hello world ${i}\n`, { flag: 'a' })
// }

const { createReadStream } = require('fs')

const stream = createReadStream('./content/bigFile.txt', { encoding: 'utf-8' })

//default 64kb - size of buffer
//data is read in chunks 
//last buffer - remainder
//highWatermark - control size
stream.on('data', (result) => {
        console.log(result)
    })
    //write data in chunks 
stream.pipe()