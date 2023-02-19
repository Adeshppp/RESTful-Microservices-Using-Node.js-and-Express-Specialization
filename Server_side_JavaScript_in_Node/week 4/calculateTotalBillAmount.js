// const calculateTotalBillAfterDiscount = (billAmount, discountPercentage)=>{
//     setTimeout(()=>{
//         console.log(billAmount-(billAmount*discountPercentage/100));
//     },2000)
// }

const calculateTotalBillAfterDiscount = (billAmount, discountPercentage)=>{
    console.log(billAmount-(billAmount*discountPercentage/100))
}


const validateBillAmount = (billAmount)=>{
    if(billAmount<=0) console.log("Invalide Bill")
    else console.log("valid Bill")
}



var billAmount=process.argv[2]
var discountPercentage = process.argv[3]


setTimeout(calculateTotalBillAfterDiscount,2000,billAmount,discountPercentage);
// calculateTotalBillAfterDiscount(billAmount,discountPercentage);
validateBillAmount(billAmount);