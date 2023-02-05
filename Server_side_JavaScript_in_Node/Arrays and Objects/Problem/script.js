
const products = [["Gucci Belt",300],["Smiley T-shirt",50],["Shinie Nail Paint",10]];

const calculateDiscountedPrice=(discount)=>{
    for(let i=0;i<products.length;i++) products[i][1]=products[i][1]-(products[i][1]*discount)/100;
}


calculateDiscountedPrice(10);

console.log(products);