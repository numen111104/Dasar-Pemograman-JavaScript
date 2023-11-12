function Mobil(
  merek = "Honda",
  warna = "Hijau",
  tahunProduksi = 2022,
  harga = 0
) {
  this.merek = merek;
  this.warna = warna;
  this.tahunProduksi = tahunProduksi;
  this.harga = harga;

  this.angkaCepat = `${4 * 8 / 2} + ${harga}`;
}

Mobil.prototype.gas = function () {
  console.log(
    `Mobil bermerek ${this.merek} dan berwarna ${this.warna} sedang menggas`
  );
};

Mobil.prototype.rem = function () {
  console.log(
    `Mobil keluaran tahun ${this.tahunProduksi} dengan harga ${this.harga} mengerem`
  );
};

Mobil.prototype.gantiGigi = function () {
  console.log(`Mobil merek ${this.merek} sedang mengganti gigi`);
};

const mobil1 = new Mobil(); // Membuat objek mobil1 dengan nilai default
const mobil2 = new Mobil("Avanza", "Merah", 2001, 45000); // Membuat objek mobil2 dengan argumen
console.log(mobil1);
console.log(mobil2);

mobil1.gantiGigi();
mobil2.rem();

//ES6 Syntax Class
class Motor {
  constructor(merek, warna, harga, tahunKeluar) {
    this.merek = merek;
    this.warna = warna;
    this.harga = harga;
    this.tahunKeluar = tahunKeluar;
  }

  drive() {
    console.log(`Motor ${this.merek} mulai berkendara`);
  }

  brake() {
    console.log(`Motor dengan harga ${this.harga} mengerem`);
  }
}

const motor1 = new Motor("Honda", "Merah", 9000000, 2020);
const motor2 = new Motor("Yamaha", "Biru", 4330000, 2020);

console.log(motor1);
console.log(motor2);
console.log(typeof Motor);

motor1.drive();
motor2.brake();




