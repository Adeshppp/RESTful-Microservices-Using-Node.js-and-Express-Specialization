let product = {
    productId : "10-665740",
    costPrice: 2750,
    profitPercentage: 15,
    sellingPrice: 0
}

// function calculateSellingPrice(product){
//     product.sellingPrice=product.costPrice+((product.profitPercentage*product.costPrice)/100);
// }


// arrow function
const calculateSellingPrice= (product) =>{
    product.sellingPrice=(product.costPrice+((product.profitPercentage*product.costPrice)/100))*2;
}

calculateSellingPrice(product);

console.log(product);