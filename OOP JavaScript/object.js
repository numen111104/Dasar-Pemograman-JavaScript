
const car = {
  //properti
  merek: "Avanza",
  warna: "merah",
  tahun: 2022,
  kecepatanMax: 200,

  //method
  gas: () => {
    console.log("Mobil digas");
  },
  rem: () => {
    console.log("Mobil direm");
  },
  gantiGigi: () => {
    console.log("Mobil diganti giginya");
  },
};

//mengakses properti
console.log(car.merek);
console.log(car.warna);
console.log(car.tahun);
console.log(car.kecepatanMax);

//mengakses methode
car.gas();
car.rem();
car.gantiGigi();
