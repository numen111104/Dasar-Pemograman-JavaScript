const user = {
  name: "Jason",
  age: 19,
  maried: false,
  "Hair color": "Black",
};
console.log(user);
console.log(`Hai Nama Saya ${user.name}, Saya berumur ${user.age}`);

//Mengubah isi object
user.name = "Haidar";
user["age"] = 18;
console.log(`Hai Nama Saya ${user.name}, Saya berumur ${user.age}`);
console.log(user);

//Otomatis menambahkan object baru jika properti yang ingin diperbarui tidak ditemukan
user.addres = "Karawang";
user["Skin Color"] = "Black";
console.log(user);

//Dapat menghapus properti juga menggunakan keyword delete
delete user["Skin Color"];
