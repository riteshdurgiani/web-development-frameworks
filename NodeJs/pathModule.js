const path = require('path')

//gives the path separator for your system
console.log(path.sep)

// gives the complete path by joining using the separator that your particular system uses 
const filePath = path.join('/content', 'subcontent', 'test.txt')
console.log(filePath)

//displays content of the file whose path is provided
const base = path.basename(filePath)
console.log(base)

//gives the absolute path or the detailed path
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'test.txt')
console.log(absolute)