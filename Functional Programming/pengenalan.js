// IMPERATIF, Melakukan semua dengan manual, mulai dari how to looping, kemudian bagaiamna caranyua menggunakan pengulangan di javascript
const names = ["John", "Haidar", "Numen", "Miqdad"];

const namaBaru = [];

for (let i = 0; i < names.length; i++) {
  namaBaru.push(`${names[i]}!`);
}

console.log(namaBaru);

// DEKLARATIF

const namas = ['Hedar', 'Miqdad', 'Fulan'];

const namaDenganTandaSeru = namas.map((nama) => `${nama}!`);
console.log(namaDenganTandaSeru);