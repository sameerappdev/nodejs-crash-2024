import crypto from 'crypto' // used for creating random ids and also for encryption/decryption

// 1. createHash()
const hash = crypto.createHash('sha256') // algorithm
hash.update('password1234') // text to encode
console.log(hash.digest('hex')) // encoding type

// 2. randomBytes() to create multiple hash ids
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    console.log('randomBytes', buf.toString('hex'))
})

// 3. createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// a) cipher text encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(`Hello I'm learning MERN development`, 'utf-8', 'hex');
encrypted += cipher.final('hex')
console.log('encrypted', encrypted)

// b) decipher text decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf8')
console.log('decrypted', decrypted)