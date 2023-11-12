const {stokHp,isTokonyaReady} = require('./state')
console.log(stokHp);
console.log(isTokonyaReady);


console.log("Numan Ganteng banget");


const beliHp = (type, jml) => {
    let pesan =null;
    switch(false){
        case jml - stokHp.samsung[type] === 0:
            pesan = `Stok ${type} habis`;
            break;
        case jml > stokHp.samsung[type]:
            pesan = `Stok ${type} tidak mencukupi`;
            break;
        default: stokHp.samsung[type] != jml;
            pesan = `anda membeli ${jml} Hp ${type}`;
            break;
    }
    console.log(pesan);
}

beliHp("samsung",20 )
