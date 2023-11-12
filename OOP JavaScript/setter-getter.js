class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._bapakName = "Muhammad Zen";
  }

  get bapakName() {
    return this._bapakName;
  }

  set bapakName(bapakName) {
    console.log("Nama bapak gabisa diganti");
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Haidar", "Miqdad");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

user.fullName = "Aima Maryam";
console.log(user);
console.log(user.fullName);

user.bapakName = "Bapak kau";
