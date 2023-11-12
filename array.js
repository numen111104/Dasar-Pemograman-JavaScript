let data = ["Asus", 22, 33, true, false, "maimunah", 200n];
console.log(data);
// Kita dapat menambahkan sebuah tipe data baru pada variabel data di dalam data array menggunakan methode push(), dengan ini kita akan menambahkan data baru di akhir array
data.push("numenide");
console.log(data);
// Sedangkan jika ingin membuang data array terakhir kita bisa menggunakan methode pop()
data.pop();
console.log(data);
// Untuk membuang element pertama dari data array kita bisa menggunakan shift()
data.shift();
console.log(data);
//Untuk menambahkan data array di element pertama maka bisa gunakan unshift()
data.unshift(12322n);
console.log(data);

//untuk menghapus data pada array tanpa menghapusnya di index kita bisa mengggunakan delete variabel []
//maksudnya disini hanya akan menghaous nilai dan membiarkan element tersebut kosong
delete data[0];
delete data[1];
delete data[2];
delete data[7];
console.log(data)

//untuk menambahkan data array pada element kita bisa gunakan methode.splice()
const bulan = ['January', 'February', 'April', 'Juni'];
console.log('sebelum di tambah: ', bulan);

bulan.splice(2, 0, 'March', 'May');//fungsi ini akan menambahkan 2 elemen pada index 2 dan 3 dan fungsi 0 adalah jumlah elemen yang akan ditambah
console.log('sesudah di tambah: ', bulan);

//untuk menghapus data array pada element kita bisa gunakan methode.splice()
bulan.splice(1, 1); //untuk menghapus 1 index dari 1 elemen
console.log('sesudah di hapus: ', bulan);

//buatkan looping menggunakan for pada variabel evenNumber yang berupa array bilangan genap dari 1 hingga 100
let evenNumber = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    }
}
console.log(evenNumber);

let oddNumber = [];
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        oddNumber.push(i);
    }
}

console.log(oddNumber);



let randomNumber = [];
for (let i = 1 ; i <= 100 ; i++ ){
    if(i + 3 === 5 || i ) {
        randomNumber.push(i);
    }
}

console.log(randomNumber);