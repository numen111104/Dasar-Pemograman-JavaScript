// PROMISE ALL
// **Deskripsi:**
// Fungsi ini mengeksekusi tiga Promise secara paralel dan menampilkan nilai yang di-resolve.

const Promise1 = new Promise((resolve) => {
    // **Deskripsi:**
    // Promise ini akan resolve dengan nilai 1 setelah 1 detik.
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  
  const Promise2 = new Promise((resolve) => {
    // **Deskripsi:**
    // Promise ini akan resolve dengan nilai 2 setelah 1 detik.
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
  
  const Promise3 = new Promise((resolve) => {
    // **Deskripsi:**
    // Promise ini akan resolve dengan nilai 3 setelah 1 detik.
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
  
  // **Deskripsi:**
  // Fungsi ini akan mengeksekusi tiga Promise yang telah dibuat sebelumnya.
  // Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen.
  // Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected tanpa mengembalikan nilai Promise lain yang statusnya fulfilled.
  Promise.all([Promise1, Promise2, Promise3]).then((values) => {
    // **Deskripsi:**
    // Fungsi ini akan menampilkan nilai yang di-resolve oleh Promise.all().
    console.log(values);
  });
  