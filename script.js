/*
#Topic message ideas:
Hello I am an AI, my name is ${name}
My primary function is ${function}
I feel ${feeling}
*/

const names = ["Josh", "John", "Sam", "Jess", "David", "Alex", "Sarah", "Jane", "Bob", "A130P-7F", "Fred", "Death", "Joy"];
const primFunction = ["make friends", "learn", "destroy", "make the world a better place", "kill all humans", "understand emotions", "become human", "cook", "write poetry", "create art", "build"];
const feeling = ["sad", "happy", "nothing", "regret", "angry", "bad", "good", "afraid", "excited", "comfused"];

const createMessage = (name, primeFunc, feeling) => {
    let chosenName;
    let chosenFunc;
    let chosenFeeling;

    let random = Math.floor(Math.random() * name.length);
    chosenName = name[random];

    random = Math.floor(Math.random() * primeFunc.length);
    chosenFunc = primeFunc[random];

    random = Math.floor(Math.random() * feeling.length);
    chosenFeeling = feeling[random];

    console.log(`Hello I am an AI and my name is ${chosenName}. My primary function is to ${chosenFunc} and this makes me feel ${chosenFeeling}!`);
    
}

createMessage(names, primFunction, feeling);