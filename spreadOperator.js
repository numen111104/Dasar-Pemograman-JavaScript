//Spread operator adalah aturan penulisan ES6 baru untuk menampilkan semua elemen dalam array, objek, atau fungsi. Kita bisa menggunakannya dengan cara menambahkan '...' di depan nama variabel.

const kota = ['Jakarta', 'Bandung', 'Surabaya'];
const provinsi = ['DKI Jakarta', 'Jawa Barat', 'Jawa Timur'];
console.log("Ada beberapa kota indonesia yaitu" ,...kota, "dengan provinsi", ...provinsi); 