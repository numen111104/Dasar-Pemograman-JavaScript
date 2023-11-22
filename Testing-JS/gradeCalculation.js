const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every((exam) => typeof exam === "number");
  if (!numberValidation) throw new Error("Nilai harus berupa angka");

  const sumValues = valuesExam.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sumValues / valuesExam.length;
};

const isStudentPass = (valuesExam, name) => {
  const minValues = 65;
  const average = averageExams(valuesExam);

  if (average > minValues) {
    console.log(`Selamat ${name}, Anda lulus!`);
    return true;
  } else {
    console.log(`Maaf ${name}, Anda gagal!`);
    return false;
  }
};

module.exports = {
  averageExams,
  isStudentPass,
};
