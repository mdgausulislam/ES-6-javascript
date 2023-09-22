const person='hemonto';
const person2='ben-white';
const person3=`Donald-trump`;

const multiline='First line text \n'+ 
'second line of code \n' + 'third line of text \n' +'fourth line of string \n';

console.log(multiline);


const newMultiline=`First line text
second line of code
third line of text
fourth line of string`;
console.log(newMultiline);


const q=20;
const b=30;

const summary='sum of b' +q +'and'+b+ 'is: ' +(q+b);
console.log(summary);

const newSummary= `sum of ${q} and ${b} is: ${q+b}`;
console.log(newSummary);
const nums=[78,98,45,12,6,444];
const newSummary1= `sum of ${nums.length} and ${b} is: ${q+b}`;
console.log(newSummary1);