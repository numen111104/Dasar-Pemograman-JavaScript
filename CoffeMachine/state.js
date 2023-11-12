const stokHp = {
    samsung : 20,
    xiaomi : 10,
    oppo : 15,
}

const isTokonyaReady = true;

// module.exports = stokHp; Dari yang kek begini
module.exports = {
    stokHp,
    isTokonyaReady
}
console.log(module.exports);
//Kita tidak oleh menginisiasi ulang module.eksport, jika ingi mengekspor lebih dari  1 objek maka gunakan obejk literal
console.log(module);