// import costBulanan from "./objectHome.js";
import { costBulanan as Kosan, isWaterReady } from "./objectHome.js";
console.log(Kosan, isWaterReady);

const aerReady = pesan => {
    if(isWaterReady === false){
        console.log(pesan);
    } else {
        console.log("aer sudah siap");
    }
}

// JIka eror berarti terminal tidak mengenal modul yang kita buat, oleh sebab itu kita harus mengubah ekstensi file ini atau menambahakn properti type pada package.json dengan value modul

aerReady("aer belum ready")