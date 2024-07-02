// import fs from 'fs';
import fs from "fs/promises";

// 1. readFile() - Callback Version
// fs.readFile('./demo.txt', 'utf-8', (error, data) => {
//     if (error) throw error
//     console.log(data)
// })

// 2. readFileSync() - Synchronous Version
// const data = fs.readFileSync('./demo.txt', 'utf-8')
// console.log(data)

// 3. readFileSync() - Promise .then()
    // fs.readFile('./demo.txt', 'utf-8')
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));

// 4. readFileAsync() - Asynchronous/Await Version
const readFile = async () => {
  try {
    const data = await fs.readFile('./demo.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 5. writeFile() - Overwrite File
const writeFile = async () => {
    try {
      await fs.writeFile('./demo.txt', "Hello I'm overwriting this file");
      console.log('File written to....');
    } catch (error) {
      console.log(error);
    }
  };

  // 6. appendFile() - Append File
const appendFile = async () => {
    try {
      await fs.appendFile('./demo.txt', "\nHello This is the appended text");
      console.log('File appended to....');
    } catch (error) {
      console.log(error);
    }
  };


writeFile()
appendFile()
readFile()