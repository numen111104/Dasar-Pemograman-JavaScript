/*
Sebelum mulai menginstal package, kita perlu tahu terlebih dulu bahwa ada dua jenis instalasi package,
yaitu local install dan global install.
Local package akan dipasang di dalam direktori atau folder yang sama dengan project kita.
Package ini akan diletakkan di dalam folder node_modules.
Sementara global package dipasang di satu tempat pada sistem perangkat kita (tergantung pengaturan pada saat instalasi node/npm).
Umumnya, semua package harus diinstal secara lokal.
Ini memastikan setiap project atau aplikasi di komputer kita memiliki package dan versi yang sesuai dengan kebutuhan.
Untuk menginstal package secara lokal caranya sama seperti yang telah kita bahas sebelumnya,
yaitu dengan perintah npm install.
 npm install <package-name> = untuk local
 npm install -g <package-name> = untuk global
*/

/*
  Penjelasan tentang dependencies dan devDependencies dalam berkas package.json:

  Ada dua tipe objek dependencies dalam package.json:
  1. Objek dependencies: Menyimpan package yang diperlukan untuk membuat dan menjalankan aplikasi.
  2. Objek devDependencies: Digunakan untuk package yang hanya diperlukan selama proses pengembangan, seperti package untuk testing (contohnya: jest).
     Package devDependencies seperti jest hanya diperlukan selama proses pengembangan dan tidak digunakan lagi setelah aplikasi dirilis atau oleh pengguna.

  Untuk memasang package sebagai devDependencies, gunakan perintah npm install dengan menambahkan parameter --save-dev.
  
  Contoh:
  npm install nama-package --save-dev

  mennghapus package bisa dilakukan dengan cara 
  npm uninstall nama-package 
  npm uninstall nama-package  --save-dev
  
*/
