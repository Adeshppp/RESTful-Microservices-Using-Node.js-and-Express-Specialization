var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // console.log("================== New One =================")
      // console.log("CustomerId : ",CustomerId);
      // console.log("CustomerName : ",CustomerName);
      // console.log("CustomerAge : ",CustomerAge);
      // console.log("CustomerAddress : ",CustomerAddress);
      // console.log("CustomerContactNumber : ",CustomerContactNumber);
      // console.log("Category : ",Category);
      // console.log("Before : ",customerList);

      // Write the Logic here
      if(!customerList.find(customer=>customer.CustomerId === CustomerId))
      {
            // let c=Category.toUpperCase();
            const newCustomer={CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category};
            customerList.push(newCustomer);
            return customerList.length;
      }
      console.log("After : ",customerList);
}

// let premiumProducts= products.filter(product=> product.price>300)
// .map(product => {
//     return {
//         productName : product.productName.toUpperCase(),
//         price: product.price
//     }
// })

// const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
//       // Write the Logic here
//       // let stockItem = stocks.find(product => product.productName === currentProduct.productName);
//       // return customerList.map(customer => {
            
//       //       if(customer.CustomerId === CustomerId){
                  
//       //             customer.CustomerName = CustomerName;
//       //             customer.CustomerAge= CustomerAge;
//       //             customer.CustomerAddress=CustomerAddress;
//       //             customer.CustomerContactNumber=CustomerContactNumber;
//       //             customer.Category=Category;
//       //       }
//       //       return customer;
//       // });
//       // for (let i = 0; i < customerList.length; i++) {
//       //       if (customerList[i].customerId === CustomerId) {
//       //         customerList[i].name = CustomerName;
//       //         customerList[i].age = CustomerAge;
//       //         customerList[i].address = CustomerAddress;
//       //         customerList[i].contactNumber = CustomerContactNumber;
//       //         customerList[i].category = Category;
//       //         break;
//       //       }
//       //     }};

// // const updateCustomer = (customerList, CustomerId, updatedCustomer) => {
// //       return customerList.map(customer => {
// //         if (customer.CustomerId === CustomerId) {
// //           return {...customer, ...updatedCustomer};
// //         }
// //         return customer;
// //       });
// //     }
    
const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      console.log("================== Updating =================")
      console.log("CustomerId : ",CustomerId);
      console.log("CustomerName : ",CustomerName);
      console.log("CustomerAge : ",CustomerAge);
      console.log("CustomerAddress : ",CustomerAddress);
      console.log("CustomerContactNumber : ",CustomerContactNumber);
      console.log("Category : ",Category);
      console.log("Before : ",customerList);

      for (let i = 0; i < customerList.length; i++) {
        if (customerList[i].CustomerId === CustomerId) {
          customerList[i].CustomerName = CustomerName;
          customerList[i].CustomerAge = CustomerAge;
          customerList[i].CustomerAddress = CustomerAddress;
          customerList[i].CustomerContactNumber = CustomerContactNumber;
          customerList[i].Category = Category.toUpperCase();
          break;
        }
      //   console.log("reached inside")
      }
      console.log("After : ",customerList);

    };

const getAllCustomers=()=>{
      // console.log("================== Printing =================")

  // Write the Logic here
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}