//This code show some examples about how/when use ArrowFunctions, Callback, Promises, Asycn/Await


//Without arrow function ES5

function timesTwo(params) {
    return params * 2
}

console.log("without arrow function", timesTwo(4));  // 8

//With arrow function ES6+

var timesTwo = params => params * 2
var multipleParams = (x, y) => x + y;
var singleParam = (x) => x + x;
var noParams = () => 22;

console.log("with arrow function", timesTwo(4));  // 8
console.log("with arrow function - multipleParams", multipleParams(4, 2));  // 6
console.log("with arrow function - singleParam", singleParam(1));  // 2
console.log("with arrow function - noParams", noParams(22));  // 2


var feedTheDog = (dog) => {
    if (dog === 'hungry') {
        return 'Feed the dog';
    } else {
        return 'Do not feed the dog';
    }
}

console.log(feedTheDog('hungry'));

var addValues = (x, y) => {
    console.log("this function add values");
    return x + y
}

console.log(addValues(1, 3));

// ES6
var obj = {
    id: 42,
    counter: function counter() {
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};

//obj.counter();


//example without callback
function printString(string) {
    setTimeout(() => { console.log(string) },
        Math.floor(Math.random() * 100) + 1
    )
}

function printAll() {
    printString("A");
    printString("B");
    printString("C");
}

//printAll(); //this function prints in different times

//using callback to solve the above problem 
function printStringWithCallback(text, callbackFunction) {
    setTimeout(() => {
        console.log(text);
        callbackFunction();
    },
        Math.floor(Math.random() * 100) + 1
    )
}

function printAllWithCallBack() {
    printStringWithCallback("A", () => {
        printStringWithCallback("B", () => {
            printStringWithCallback("C", () => {
            })
        })
    })
}

//printAllWithCallBack();

//to avoid a "callBack hell" you can use Promises
function printStringPromise(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string);
            resolve();
        },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

function printAllPromise() {
    printStringPromise("A")
        .then(() => {
            return printStringPromise("B");
        })
        .then(() => {
            return printStringPromise("C");
        })
}

//printAllPromise();
//the letters were printed in order but the code becomes a messy


//using async function is like a syntactic sugar for Promises, making your asynchronous code look more like synchronous/procedural code
//more easy to understand
async function printAllAwait() {
    await printStringPromise("A");
    await printStringPromise("B");
    await printStringPromise("C");
}

printAllAwait();

