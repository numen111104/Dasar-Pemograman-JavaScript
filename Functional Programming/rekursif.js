//Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

// ITERASI
const countDown = (start) => {
  do {
    console.log(start);
    start -= 1; // start = start 1-1
  } while (start > 0);
};

countDown(10);

//REKURSIF
const countDown2 = (start) => {
  console.log(start);
  if (start > 0) 
  countDown2(start - 1);
};

countDown2(10)