// asynchoronous adalah baris kode yang akan berjalan tanpa menghiraukan posisinya di baris kode
// Contohnya seperti penggunaan set.timeOut untuk menunggu beberapa detik

console.log('Selamat datang')
console.log('Terima Kasih, sudah berlangganan')


setTimeout(() => {
    console.log('Datang lagi yak!')
}, 2000)