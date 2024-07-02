import os from 'os'

// 1. userInfo()
console.log(os.userInfo())

// 2. totalmem() gives total memory in bytes
console.log(os.totalmem())

// 3. freemem() gives free memory in bytes
console.log(os.freemem())

// 4. cpus() gives cpu info in array of core objects
console.log(os.cpus())