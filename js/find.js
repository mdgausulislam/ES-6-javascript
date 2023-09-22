const numbers=[12, 5, 23, 45, 55, 103, 61, 1, 89, 10, 78];

const divided=numbers.find(x=>x%5===0);
console.log(divided);

const products=[
    {id:1, name:'laptop',price:65000},
    {id:2, name:'mobile',price:80000},
    {id:3, name:'watch',price:30000},
    {is:4, name:'tablet',price:23000},
]

const productLess=products.find(p=>p.price<40000);
console.log(productLess);