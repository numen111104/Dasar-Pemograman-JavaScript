// Disini kita menaruh semua error yang terjadi
try {
  console.log("Coba");
}
// Ketika terjadi error kode di try akan dilemparkan ke catch untuk ditangani
catch (error) {
  console.log("Terjadi error, coba cek kembali variabel a");
}


/* Objek Error memiliki 3 properti yang dibutuhkan
* error.name : Nama error
* error.message : Pesan error
* error.stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.
*/

try {
  console.log(a);
}
catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

// Finally akan selalu dieksekusi apapun terjadi di dalam 
try {
  console.log("Coba");
}
catch (error) {
  console.log("Terjadi error, coba cek kembali variabel a");
}
finally {
  console.log("Selesai");
}

