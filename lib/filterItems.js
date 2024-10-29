"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterItems(arr, predicate) {
    return arr.filter(predicate);
}
const users = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 35 },
    { id: 4, name: "David", age: 33 },
    { id: 5, name: "Beccam", age: 32 },
    { id: 6, name: "Alex", age: 28 },
    { id: 7, name: "Lalu", age: 38 },
];
const adults = filterItems(users, (user) => user.age <= 30);
console.log(adults);
