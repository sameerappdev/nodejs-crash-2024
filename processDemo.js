// 1. argv
console.log(process.argv)

// 2. process.env username
console.log(process.env.LOGNAME)

// 3. pid: process id
console.log(process.pid)

// 4. cwd(): current working directory
console.log(process.cwd())

// 5. title: process title
console.log(process.title)

// 6. memoryUsage(): memories
console.log(process.memoryUsage())

// 7. uptime(): process time 
console.log(process.uptime())

// 9. process exit listerner
process.on('exit', (code) => {
    console.log(`Process about to exit with code ${code}`)
}) 

// 8. exit()
// 0 means success (process stops)
process.exit(0)
// 1 means it has general error

console.log('Running after process exit')

