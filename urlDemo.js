import url from 'url';

const urlString = 'https://www.google.com/search?q=helllo+world';

// 1. URL Object
const urlObj = new URL(urlString)
console.log(urlObj)

// 2. import.meta.url - fileURL
console.log(import.meta.url)

// 2. filePathToURL
console.log(url.fileURLToPath(import.meta.url))

console.log(urlObj.search) // get search param

const params = new URLSearchParams(urlObj.search)
console.log(params.get('q'))
params.append('limit', 5) // append in search params
params.delete('limit', 5) // delete from search params
console.log(params)
