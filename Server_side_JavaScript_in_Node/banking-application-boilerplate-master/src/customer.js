var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      // console.log(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)
      // console.log(customerList)

      const customer = customerList.find(c=>c.CustomerId === CustomerId);
      if(!customer){
            const newCustomer = {CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category};
            customerList.push(newCustomer);
      }
      // console.log(customerList)
      // console.log(customerList.length)
      return customerList.length;
};

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
            console.log(customerList)
            let customer = customerList.find(c => c.customerId === CustomerId);
      if(customer){
            customer.Category=Category;
            customer.CustomerName = CustomerName;
            customer.CustomerAge = CustomerAge;
            customer.CustomerAddress = CustomerAddress;
            customer.CustomerContactNumber = CustomerContactNumber;
            customer.Category = Category;
      }
      console.log(customerList)
}

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}