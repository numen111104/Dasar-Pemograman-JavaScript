class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  bersuara(suara) {
    console.log(`${this.nama} bersuara: ${suara}`);
  }
}

function bisaTerbang(hewan) {
  return {
    terbang: () => {
      console.log(`${hewan.nama} dapat terbang.`);
    },
  };
}

function bisaRenang(hewan) {
  return {
    renang: () => {
      console.log(`${hewan.nama} dapat berenang.`);
    },
  };
}

function bisaLari(hewan) {
  return {
    lari: () => {
      console.log(`${hewan.nama} dapat berlari.`);
    },
  };
}

function createBurung(name) {
  const hewan = new Hewan(name);
  return Object.assign(hewan, bisaTerbang(hewan));
}

function createIkan(name) {
  const hewan = new Hewan(name);
  return Object.assign(hewan, bisaRenang(hewan));
}

function createKuda(name) {
  const hewan = new Hewan(name);
  return Object.assign(hewan, bisaLari(hewan));
}

const elang = createBurung("Elang");
elang.bersuara("Kwak-kwak");
elang.terbang();

const lumbaLumba = createIkan("Lumba-lumba");
lumbaLumba.bersuara("Ee-ee-ee");
lumbaLumba.renang();

const kudaLiar = createKuda("Kuda Liar");
kudaLiar.bersuara("Hiihii");
kudaLiar.lari();
