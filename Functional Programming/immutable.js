const user = {
  firstName: "Nide",
  lastName: "Nasyur", //typo
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName('Nasyar', user);
console.log(newUser);
console.log(createUserWithNewLastName);