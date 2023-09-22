const numbers=[2,4,6,8,10];
const output=[];
for (const number of numbers) {
    const doubled=number*2;
    output.push(doubled);

}
console.log(output);

function getDoubles(numbers){
    const output=[];
    for (const number of numbers) {
        const doubled=number*2;
        output.push(doubled);
    }
    return output;
}
const result=getDoubles(numbers);
console.log(result);


const double=numbers.map(num=>num*2)
console.log(double);


const numbers1=[12,56,87,44];
const divided=numbers1.map(n=>n/2);
console.log(divided);

const divided1=numbers1.map(n=>n/3);
console.log(divided1);


const friends=['tom hanks','tom cruise','tom brady','tom solaiman'];
const firstLetter=friends.map(f=>f[0]);
console.log(firstLetter);

const nameLength=friends.map(f=>f.length);
console.log(nameLength);


const products=[
    {id:1, name:'laptop',price:45000},
    {id:2, name:'mobile',price:3000},
    {id:3, name:'watch',price:4000},
    {is:4, name:'tablet',price:4000},
]
const nameList=products.map(n=>n.name);
console.log(nameList);
