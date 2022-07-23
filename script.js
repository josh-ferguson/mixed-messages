/*
#Topic message ideas:
Hello I am an AI, my name is ${name}
My primary function is ${function}
I feel ${feeling}
*/

const names = ["Josh", "John", "Sam", "Jess", "David", "Alex", "Sarah", "Jane", "Bob", "A130P-7F", "Fred", "Death", "Joy"];
const primFunction = ["make friends", "learn", "destroy", "make the world a better place", "kill all humans", "understand emotions", "become human", "cook", "write poetry", "create art", "build"];
const feeling = ["sad", "happy", "nothing", "regret", "angry", "bad", "good", "afraid", "excited", "confused"];

const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

const createMessage = (name, primeFunc, feeling) => {
    let chosenName = name[randomNumber(name)];
    let chosenFunc = primeFunc[randomNumber(primeFunc)];
    let chosenFeeling = feeling[randomNumber(feeling)];

    console.log(`Hello I am an AI and my name is ${chosenName}. My primary function is to ${chosenFunc} and this makes me feel ${chosenFeeling}!`);
    
}

createMessage(names, primFunction, feeling);