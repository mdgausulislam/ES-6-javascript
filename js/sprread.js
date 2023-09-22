const max=Math.max(12,85,999,78);
console.log(max);

const numbers=[12,85,999,78];
const largest=Math.max(...numbers);
console.log(largest);

console.log(...numbers);


const numbers2=[...numbers];
numbers.push(89);
numbers2.push(88)
console.log(numbers);
console.log(numbers2);
