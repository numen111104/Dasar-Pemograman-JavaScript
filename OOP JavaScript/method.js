class Person {
  constructor(nama, kelas, umur) {
    this.nama = nama;
    this.kelas = kelas;
    this.umur = umur;
  }

  // Method
  berjalan() {
    return `${this.nama} dari kelas ${this.kelas} berumur ${this.umur} sedang berjalan`;
  }

  berlari() {
    return `${this.nama} dari kelas ${this.kelas} berumur ${this.umur} sedang berlari`;
  }
  lamaBelajar(jam) {
    return `waktu yang dipakai untuk belajar adalah ${jam} Jam`;
  }
  lamaBalasWa(delay) {
    return `${this.nama} membalas pesan WA dari seseorang selama ${delay}`;
  }
}

class Produk {
    #angka = null;
  constructor(kode, tahun) {
    this.kode = kode;
    this.tahun = tahun;
    this.#angka = this.#generateKode;
  }

  #generateKode() {
    return `${this.kode}-${this.tahun}@${Math.random() * 100}`;
  }

}

const Ahmad = new Person("Fauzan", "TRPL A", 19);

console.log(Ahmad.berlari());
console.log(Ahmad.berjalan());
console.log(Ahmad.lamaBelajar(40));

console.log(Ahmad.lamaBalasWa(1000));

const Buku = new Produk('12B',2001);

// console.log(Buku.#generateKode())
// Buku.#generateKode();
