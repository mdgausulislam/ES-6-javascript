const add=(first,second)=> first+second;
const getFullName = (first,last)=> first+ ' '+last;

const multiple=(a,b)=>a*b;

const result=multiple(10,5);
console.log(result);

// multiline arrow function

const doMath=(x,y,z)=>{
    const first=x*y;
    const last=y+z;
    const firstLast=first+last;
    return firstLast;
}
const result1=doMath(5,6,7);
console.log(result1);
