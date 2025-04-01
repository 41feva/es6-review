// tools.js

// 1. Modularity: Export a function directly
export function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // 2. Class: Define and export a class
  export class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return `${this.name} makes a sound.`;
    }
  }
  
  // 3. Promises & 4. Async Function: Define and export an async function that uses a Promise
  export async function fetchData() {
    // Simulate an asynchronous operation with a Promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // For demo purposes, we're simply resolving data after 1 second.
        resolve("Data fetched successfully!");
      }, 1000);
    });
  }
  
  // 5. Maps: Create a Map and export a function that demonstrates using it
  export function createMap() {
    const myMap = new Map();
    myMap.set("language", "JavaScript");
    myMap.set("version", "ES6");
    return myMap;
  }
  