// # Problem 1 Solution

// const products = [["Gucci Belt",300],["Smiley T-shirt",50],["Shinie Nail Paint",10]];

// const calculateDiscountedPrice=(discount)=>{
//     for(let i=0;i<products.length;i++) products[i][1]=products[i][1]-(products[i][1]*discount)/100;
// }

// calculateDiscountedPrice(10);

// By using map function

// const calculateDiscountedPrice = discount => products.map(
//     product=> [product[0],product[1]-product[1]*discount/100]
// )
// let discountedPrice = calculateDiscountedPrice(10)

// console.log(products);
// console.log(discountedPrice)

// # Problem 2 Solution

const products = [
  ["Gucci Round Bucklet Belt", 400],
  ["Gucci Round Bucklet Belt", 450],
  ["Esbeda Wallet", 250],
  ["Gucci Round Bucklet Belt", 300],
  ["Smiley T-Shirt", 500],
  ["Smiley T-Shirt", 50],
  ["Smiley T-Shirt", 250],
  ["Shinie Nail Paint", 100],
];

 const premiumProducts = products.filter(product => product[1]>300);

 console.log(premiumProducts)


 const filteredProducts = products.filter(product=>product[1]<=300);

 const calculateDiscountedPrice = filteredProducts.map(
    product=>[product[0],product[1]-product[1]*0.15]
 )

let productStock = products.reduce((stocks,product)=>{
    let stockItem = stocks.find(stock=> stock[0]==product[0]);
    if(!stockItem) stocks.push([product[0],1])
    else ++stockItem[1];
    return stocks;
},[])

console.log(productStock);

 console.log(filteredProducts)
 console.log(calculateDiscountedPrice)