/* JavaScript memiliki kemampuan First Class Functions, karena itu 
fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. 
Kita bisa menyimpan function dalam variabel, 
memberikan function sebagai parameter pada fungsi lainnya, 
hingga mengembalikan function di dalam function. z z z z */

// menyimpan function dalam variabel
const hello = () => {
  console.log("Helo");
};
hello();

//memberikan function sebagai parameter pada fungsi lainnya
const say = (someFunc) => {
  someFunc();
};
say(hello);

// mengembalikan function di dalam function
const sayHello = () => {
  return () => {
    console.log("Hello");
  };
};
sayHello()();


//membuat mapArray sendiri
const names = ['Andi', 'Bastian', 'Miqdad', 'Haidar'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
      const item = arr[index];
      if(!item) return newArray;
      return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }
  
    return loopTrough(arr, action);
  }
  
  
  const newNames = arrayMap(names, (name) => `${name}!` );
  
  console.log({
    names,
    newNames,
  });