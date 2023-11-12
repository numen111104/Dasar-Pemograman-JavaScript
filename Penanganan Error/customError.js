/*
*************************************
let json = '{ "age": 30 }';
 
try {
  let user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
****************************************
Dari kodingan ini kita akan mencoba membuat sebua class baru untuk membuat custom error kita sendiri
*/

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const json = '{ "age": 30 }';

try {
    const user = JSON.parse(json);

    if(!user.name) {
        throw new ValidationError("'name' is required.");
    }

    if(user.message) {
        throw new ValidationError("'age' is required.");
    }
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Validation Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
