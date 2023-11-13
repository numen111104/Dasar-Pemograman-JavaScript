/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */


const provinces = [
  { id: 'id-jk', name: 'Jakarta' },
  { id: 'id-bt', name: 'Banten' },
  { id: 'id-jr', name: 'Jawa Barat' },
];

function getProvinces(countryId) {
  return new Promise((resolve, reject) => {
    return countryId === 'id' ? resolve(provinces) : reject(new Error('Country not found'));
  });
}

(async () => {
  const provinces = await getProvinces('id');
  console.log(provinces);
})();