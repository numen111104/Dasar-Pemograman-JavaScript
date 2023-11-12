//Set adalah data yang tidak dapat duplikasi
const angkaSet = new Set([1, 2, 3, 4, 4, 3, 5, 6, 3, 7]);
console.log(angkaSet);

// Gunakan metode add() untuk menambahkan elemen
angkaSet.add(8);
angkaSet.add(9);
angkaSet.add(10);
console.log(angkaSet); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Gunakan metode delete() untuk menghapus elemen
angkaSet.delete(1);
angkaSet.delete(10);
console.log(angkaSet); // [ 2, 3, 4, 5, 6, 7, 8, 9 ]

// Gunakan metode has() untuk mengecek apakah ada elemen
console.log(angkaSet.has(1)); // false
console.log(angkaSet.has(10)); // false
console.log(angkaSet.has(2)); // true

// Gunakan metode forEach() untuk mengulang elemen
angkaSet.forEach((value) => {
    console.log(value);
})


// Gunakan metode clear() untuk menghapus semua elemen
angkaSet.clear();

