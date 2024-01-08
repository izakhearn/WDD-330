let userCount = 0;

export default class User {
  constructor(name,age) {
    this.name = name;
    this.age = age;
    userCount++;
  }
}

export function PrintName(user) {
  console.log(`${user.name} is the users name`);
}

export function PrintAge(user) {
  console.log(`${user.age} is the users age`);
}

