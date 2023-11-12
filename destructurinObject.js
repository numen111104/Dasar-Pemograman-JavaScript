//Destructuring Object
const user = {
    nickName: "Jason",
    age: 19,
    maried: false,
    "Hair color": "Black",
}
// const { nickName, age, maried, "Hair color": hairColor } = user;
// console.log(nickName, age, maried, hairColor);

//Destructuring Assignment
let nickName = "Haidar";
let age = 18;

({ nickName, age } = user); 
console.log(nickName, age);
{ nickName, age } 
console.log(nickName, age);
