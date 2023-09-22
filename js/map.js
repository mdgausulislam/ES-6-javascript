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