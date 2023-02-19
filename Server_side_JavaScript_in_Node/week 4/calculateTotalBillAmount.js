// const calculateTotalBillAfterDiscount = (billAmount, discountPercentage)=>{
//     setTimeout(()=>{
//         console.log(billAmount-(billAmount*discountPercentage/100));
//     },2000)
// }

// const calculateTotalBillAfterDiscount = (error, billAmount, discountPercentage)=>{
//     if(error) return console.log("Error encountered!!!");
//     console.log(billAmount-(billAmount*discountPercentage/100));
// }

// const validateBillAmount = (billAmount)=>{
//     if(billAmount<=0) console.log("Invalide Bill")
//     else console.log("valid Bill")
// }

// //
// var billAmount=process.argv[2]
// var discountPercentage = process.argv[3]

// setTimeout(calculateTotalBillAfterDiscount,2000,"error", billAmount,discountPercentage);
// // calculateTotalBillAfterDiscount(billAmount,discountPercentage);
// validateBillAmount(billAmount);

// const calculateTotalBillAfterDiscount = (billAmount, discountPercentage)=>{
//     setTimeout(()=>{
//         console.log(billAmount-(billAmount*discountPercentage/100));
//     },2000)
// }

// ====================================================== Promise callback ===================================================================

// const calculateTotalBillAfterDiscount = ( billAmount, discountPercentage)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(discountPercentage<=0) {reject("Invalid discount percentage");}
//             resolve((billAmount-(billAmount*discountPercentage/100)))
//         },2000)
//     })
// }

// const validateBillAmount = (billAmount)=>{
//     if(billAmount<=0) console.log("Invalide Bill")
//     else console.log("valid Bill")
// }

// var billAmount=process.argv[2]
// var discountPercentage = process.argv[3]

// calculateTotalBillAfterDiscount(billAmount,discountPercentage).then((result)=>{
//     console.log("discounted bill amount is ", result)
// },error=>{
//     console.log(error)
// });
// validateBillAmount(billAmount);

// ====================================================== Promise Chaining ===================================================================

const calculateTotalBillAfterDiscount = (billAmount, discountPercentage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (discountPercentage <= 0) reject("Invalid discount percentage");
      resolve(billAmount - (billAmount * discountPercentage) / 100);
    }, 2000);
  });
};

const validateBillAmount = (billAmount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (billAmount <= 0) reject("Invalide Bill Amount");
      resolve(billAmount);
    },2000);
  });
};

var billAmount = process.argv[2];
var discountPercentage = process.argv[3];

validateBillAmount(billAmount)
  .then((amount) => {
    return calculateTotalBillAfterDiscount(amount, discountPercentage);
  })
  .then((result) => {
    console.log("Bill amount after discount is ", result);
  })
  .catch((error) => {
    console.log(error);
  });
