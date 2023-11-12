// Perbedaan Map() dan weakMap()
// Map()
const attendCountMap = new Map();

function attendUser(user) {
    let count = attendCountMap.get(user) || 0;
    attendCountMap.set(user, count + 1);
}

// Menambahkan user baru
let orang = ["Nu'man", "Haidar", "Jason"];
attendUser(orang[2]);
console.log(attendCountMap);

let orang1 = {nama : "Nu'man"};
attendUser(orang1);
orang1 = null;
setTimeout(function(){
    console.log(attendCountMap);
}, 1000);

//kesimpulan nya orang1 tidak akan bisa dihapus dengan mengubahnya menjadi null

//weakMap()
const attendCountWeakMap = new WeakMap();
setTimeout(function(){
    console.log(inspect(attendCountMap, {showHidden: true}));
}, 1000);
