// const {genereateRandomNumber, celciusToFahrenheit} = require("./utils");
// import { getPosts } from "./postController.js"; // Named/Multiple export
import getPosts, {postLength} from "./postController.js"; // Default Export

// console.log(`Random Number: ${genereateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(10)}`);
console.log(getPosts());
console.log(`Post Length: ${postLength()}`);
