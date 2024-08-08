// const userOne = {
//   name: "Muhamamd Mutahir",
//   loginCOunt: 8,
//   signIn: true,
//   getUser: function () {
//     // console.log(`SALAM ${this.name}`);
//     console.log("this", this);
//   },
// };

// const userTwo = {
//   name: "Muhamamd Mutahir",
//   loginCOunt: 8,
//   signIn: true,
//   getUser: function () {
//     // console.log(`SALAM ${this.name}`);
//     console.log("this", this);
//   },
// };
// console.log('this', this)

// console.log("user", user);
// console.log("user", user.name);
// console.log("user", user.getUser());

// const promiseOne = new Promise();

function User(name, password, pinCode) {
  (this.name = name), (this.password = password), (this.pinCode = pinCode);
  return this;
}

const user1 = new User("Muhammad Talha", "12345678", "123465");
const user2 = new User("Muhammad Mutahir", "123456", "1234");
console.log("user1", user1);
console.log("user2", user2);
