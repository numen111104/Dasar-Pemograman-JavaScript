// Array Map
const newArray = ["nide", "haidar", "miqdad"].map((name) => {
  return `${name}!`;
});
console.log(newArray);

//Array Filter, Fungsi ini harus mengembalikkan boolean
const truthArray = [1, "0", "hello", 14, null, 92n].filter((item) =>
  Boolean(item)
);
console.log(truthArray);

const siswa = [
  {
    nama: "David",
    skor: 45,
  },
  {
    nama: "Jason",
    skor: 95,
  },
  {
    nama: "Mulia",
    skor: 65,
  },
  {
    nama: "Kencan",
    skor: 55,
  },
];

const siswaYangLolosEligible = siswa.filter((siswa) => siswa.skor > 75);
console.log(siswaYangLolosEligible);

// Array Reduce
const totalSkor = siswa.reduce((akumul, siswa) => akumul + siswa.skor, 0);
console.log(totalSkor);

// Array Some
const angka = [1, 3, 5, 7, 9];
const odd = angka.some((element) => element % 2 !== 0);
const even = angka.some((element) => element % 2 === 0);
console.log(odd);
console.log(even);

//Array Find
const findHaidar = siswa.find((siswa) => siswa.nama === "Haidar");
const findKencan = siswa.find((siswa) => siswa.nama === "Kencan");
console.log(findHaidar);
console.log(findKencan);

//Array Sort urutannya berdasarkan data string ascending
const bulan = [
  "Ahmad",
  "Ances",
  "Makarena",
  "Belog",
  "Halfuru",
  "Roti",
  "Nide",
];
const urut = bulan.sort();
console.log(urut);

const aray = [2, 1, 3, 400, 2001, 100, 220, 4];
const urutAray = aray.sort();
console.log(urutAray);

//atur sendiri aturannya
const comporeNumber = (a, b) => {
  return a - b;
};
const sorting = aray.sort(comporeNumber);
console.log(sorting);

//Array Every = mengecek kriteria sebuah array sesuai yang didefinisikan
const skorAhmad = [43, 66, 34, 65];
const skorNide = [73, 88, 94, 65];
const skorMinimal = 65;

const lulusUjianAhmad = skorAhmad.every(
  (skorAhmad) => skorAhmad >= skorMinimal
);
const lulusUjianNide = skorNide.every((skorNide) => skorNide >= skorMinimal);
console.log(lulusUjianAhmad); //Mengembalikan true jika semua nilai lulus
console.log(lulusUjianNide);

//Array ForEach
/**/
//Cara Imperatif
const names = ["Ahmad", "Nide", "Fulan"];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Nide") continue;
  console.log(`Hello, ${names[i]}!`);
}

//Cara Deklaratif
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
