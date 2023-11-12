const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['Bandung', 'Indonesia'],
    ['Surabaya', 'Indonesia'] 
]);

//Gunakan methode size untuk mendapatkan jumlah elemen
console.log(capital.size); // 3

//Gunakan methode get untuk mendapatkan nilai
console.log(capital.get('Jakarta')); // Indonesia

//Gunakan metode set untuk menambahkan elemen
capital.set('Tidore', 'Maluku Utara');

//Gunakan methode has untuk mengecek apakah ada elemen
console.log(capital.has('Jakarta')); // true 

//Gunakan methode delete untuk menghapus elemen
capital.delete('Jakarta');
console.log(capital.has('Jakarta')); // false

//Gunakan metode clear untuk menghapus semua elemen
capital.clear();
console.log(capital);

//Gunakan metode set untuk menambahkan elemen
capital.set('Jakarta', 'Indonesia');
capital.set('Tidore', 'Indonesia');
capital.set('Ternate', 'Indonesia');

//Gunakan metode keys untuk mendapatkan semua key
console.log(capital.keys());



