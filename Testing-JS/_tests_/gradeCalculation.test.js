
const {averageExams, isStudentPass} = require("../gradeCalculation")


describe('grade calcultion', () => {

test('it should return average grade', () => {
  let listValueExam = [ 60, 90, 85, 90, 100];
  let result = averageExams(listValueExam);
  expect(result).toEqual(85);
})

test('it should return examp pass status', () => {
  let listValueExam = [90,65,70,89,80];
  let result = isStudentPass(listValueExam, "Numenide");
  expect(result).toEqual(true);
})

test('it should return examp fail status', () => {
  let listValueExam = [60,65,56,56,45];
  let result = isStudentPass(listValueExam, "Numenide");
  expect(result).toEqual(false);
})
});

// Untuk menjalankan silahkan ketik npm run test atau jest jika di script belum diseting, kemudian jika ingin membuat laporan dari hasil testing anda bisa menggunakan tambahan -- --coverage