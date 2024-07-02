import path from 'path'
import url from 'url'

const filePath = './dir1/dir2/demo.txt'

// 1. basename()
console.log(path.basename(filePath))

// 2. dirname()
console.log(path.dirname(filePath))

// 3. extname()
console.log(path.extname(filePath))

// 4. parse()
console.log(path.parse(filePath))

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename, __dirname)

// 5. join() for path alignment on every os
// Mac path: users/brad
// Windows path: users\brad
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'demo.txt')
console.log(filePath2)

// 6. resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'demo.txt')
console.log(filePath3)