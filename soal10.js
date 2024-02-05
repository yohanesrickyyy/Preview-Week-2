class Mobil {
  constructor(merek, harga, warna, bensin, jumlahRoda) {
    this.merek = merek;
    this.harga = harga;
    this.warna = warna;
    this.bensin = bensin;
    this.jumlahRoda = jumlahRoda;
  }

  tampilkanSpesifikasi() {
    console.log(
      `Mobil saya bermerek ${this.merek} dengan harga ${this.harga} rupiah, berwarna ${this.warna}, bensinnya ${this.bensin}, dan beroda ${this.jumlahRoda}.`
    );
  }

  jualMobil() {
    let hargaDiskon = this.harga * 0.8;
    console.log(`Harga mobil setelah diskon: ${hargaDiskon} rupiah.`);
  }
}


let mobilSaya = new Mobil("Hando", 300000000, "merah", "solar", 4);
mobilSaya.tampilkanSpesifikasi();
mobilSaya.jualMobil(); // 
