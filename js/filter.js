const numbers=[12, 5, 23, 45, 55, 103, 61, 1, 89, 10, 78];

const bigNums=numbers.filter(number=>number>20);
const bigNums1=numbers.filter(number=>number<20);

const bigNums2=numbers.filter(numbers=>numbers%2==0);
console.log(bigNums2);
console.log(bigNums1);
console.log(bigNums);


const products=[
    {id:1, name:'laptop',price:45000},
    {id:2, name:'mobile',price:3000},
    {id:3, name:'watch',price:4000},
    {is:4, name:'tablet',price:4000},
]
const productsPrice=products.filter(product=>product.price>3500);
console.log(productsPrice);