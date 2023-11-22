/*
FORMAT TESTING
**********************
test('deskripsi dari testcase kamu', () => {
    expect(perintah).matcher(nilai yang diekspektasikan);
});
**********************

test('dua kuadrat adalah 4', () => {
    expect(2**1).toBe(4);
})

Dari contoh kode di atas expect(2 + 2) merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, perintah tersebut dapat berupa fungsi ataupun perintah langsung.

toBe(4) disebut dengan matcher, berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya. Dalam jest sendiri terdapat berbagai matchers yang dapat digunakan, misalkan:

toBe(x)	bahwa nilai ekspektasi yang diharapkan adalah x
toEqual(x)	bahwa nilai ekspektasi yang diharapkan sama dengan x
toBeNull()	bahwa nilai ekspektasi yang diharapkan adalah null
toBeTruthy()	bahwa nilai ekspektasi yang diharapkan adalah truth
toBeFalsy()	bahwa nilai ekspektasi yang diharapkan adalah false

*/

const { default: test } = require("node:test");
const { describe } = require("yargs");

test("dua kuadrat adalah 4", () => {
  expect(2 ** 1).toBe(4);
});

// dengan jest kita bisa menggrupkan testing dari kodingan kita menggunakan fucntion describe
describe("aritmatika", () => {
  test("#1 Dua tambah Tiga adalah 5", () => {
    expect(2 + 3).toBe(5);
  });

  test("#2 Lima kurang Empat", () => {
    expect(5 - 4).toBe(1);
  });
});
