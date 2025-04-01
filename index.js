// index.js

// Importing everything from tools.js
import { greet, Animal, fetchData, createMap } from './tools.js';

// Test the greet function (Modularity)
console.log(greet("Developer")); // Should print: Hello, Developer!

// Test the Animal class
const myAnimal = new Animal("Buddy");
console.log(myAnimal.speak()); // Should print: Buddy makes a sound.

// Test the async function that returns a Promise
fetchData().then((result) => {
  console.log(result); // Should print: Data fetched successfully!
}).catch((error) => {
  console.error(error);
});

// Test the Map function
const map = createMap();
console.log("Map contents:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`); // Should print key-value pairs like language: JavaScript and version: ES6.
}
