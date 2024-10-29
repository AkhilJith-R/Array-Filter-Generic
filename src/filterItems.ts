import User  from './users';

function filterItems<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

const users: User[] = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "David", age: 33 },
  { id: 5, name: "Beccam", age: 32 },
  { id: 6, name: "Alex", age: 28 },
  { id: 7, name: "Lalu", age: 38 },
];

const adults: User[] = filterItems(users, (user) => user.age <= 30);
console.log(adults);

