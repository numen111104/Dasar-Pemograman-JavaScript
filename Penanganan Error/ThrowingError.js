// INI BERHASIL
const json = '{"name": "John", "age": 30}';
try {
    const user1 = JSON.parse(json);
    console.log(user1.name);
    console.log(user1.age);
} 
catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// INI GAGAL

const json2 = '{ bad json2 }';
 
try {
  const user = JSON.parse(json2);
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}


// BAGAIAMANA JIKA undefined
const json3 = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json3);
  console.log(user.name); // undefined. padahal seharusnya error
  console.log(user.age);  // 20

  if(!user.name) {
    throw new SyntaxError("'name' is not required");
  }
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}


// Bagaimana JIKA 
const json4 = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json4);
  console.log(user.name); // undefined. padahal seharusnya error
  console.log(user.age);  // 20
  errorCode;

  if(!user.name) {
    throw new SyntaxError("'name' is not required");
  }
} catch (error) {
  if(error instanceof ReferenceError) {
    console.log(`ReferenceError: ${error.message}`);
  } else if (error instanceof SyntaxError) {
    console.log(`SyntaxError: ${error.message}`);
  } else {
    console.log(error.stack);
  }
}


