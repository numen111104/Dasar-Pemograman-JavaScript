// Pure Function Konsep fungsi yang tidak bergantung kepada nilai atau paramater dari luar function tersbut

//Contoh dari Impure Function
let PI = 3.14;

const hitungLuasLingkaran = (jarijari) => {
  return PI * (jarijari * jarijari);
};

console.log(hitungLuasLingkaran(45));

PI = 2;
console.log(hitungLuasLingkaran(4));

// Function ini bergantung pada nilai dari luar fungsi tersebut yaitu PI maka untuk membuat nya menjadi pure adalah
// Contoh Pure Function
const ngitungLuas = (jari2) => {
  return 3.14 * (jari2 * jari2);
};
console.log(ngitungLuas(34));

// Pure Function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja maupun tidak sengaja

// const buatOrangWithPerson = (age, person) => {
//   person.age = age;
//   return person;
// };

// const person = {
//   name: "John",
// };

// const newPerson = buatOrangWithPerson(11, person);
// console.log(newPerson, person);

const createPersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person);
  
  console.log({
    person,
    newPerson
  });
  
