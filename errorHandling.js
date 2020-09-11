//This code show some examples about errorhandling

//simple try catch
try {
    console.log("I'll try do something!");
} catch (e) { }

//simulating an exception
try {
    console.log("I'll try do something, but i will induce a exception!");
    throw new Error("An error ocurred right here!");
} catch (e) {
    console.log("You got a exception:", e);
}

//customErros
class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "MyCustomError";
    }
}

try {
    throw new MyCustomError("Here happend a custom error!");
} catch (e) {
    console.log(e.message); // "Here happend a custom error!"!
    console.log(e.name); // "MyCustomError"
    //console.log(err.stack);
}


/*
  If an uncaught exception gets thrown during the execution of your program, your program will crash. 
  The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated resources for example: file descriptors, handles, etc before shutting down the process.
  So let the application crash, log the error and then restart the process. you can do it simply like this
*/
process
    .on('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
        console.log("I will to perform synchronous cleanup of allocated resources")
        //console.error(err.stack);
        process.exit(1);
    });

// Intentionally cause an uncaughtException, but don't catch it.
function simulateUnCaughtException() {
    nullObject.someMethod();
}

simulateUnCaughtException();