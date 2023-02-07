var category = function category(key) {
  
  // Write the Logic here
  if(key === 'PL') return "Personal Loan";
  else if(key === "VL") return "Vehicle Loan";
  else if(key === "EL") return "Education Loan";
  else if(key === "HL") return "Home Loan";

  };
  
  module.exports = {
    category: category
  };