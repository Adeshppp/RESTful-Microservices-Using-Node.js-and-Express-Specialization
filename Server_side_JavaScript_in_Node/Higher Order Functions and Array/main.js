const companies = [
    {
        name: "Company One", category:
            "Finance", start: 1981, end: 2003
    },
    {
        name:
            "Company Two", category:
            "Retail", start: 1992, end: 2008
    },
    {
        name:
            "Company Three", category: "Auto", start: 1999, end: 2007
    },
    {
        name: "Company Four", category:
            "Retail", start: 1989, end: 2010
    },
    {
        name:
            "Company Five", category:
            "Technology", start: 2009, end: 2014
    },

    {
        name:
            "Company Six", category:
            "Finance", start: 1987, end: 2010
    },

    {
        name:
            "Company Seven", category:
            "Auto", start: 1986, end: 1996
    },

    {
        name:
            "Company Eight", category:
            "Technology", start: 2011, end: 2016
    },

    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }


//=============================== forEach================================

// companies.forEach(function(company){
//     console.log(company)
// })

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ================================ filter()===================================

// let canDrink=[];
// for(let i=0;i<ages.length;i++) if(ages[i]>=21) canDrink.push(ages[i]);


// const canDrink = ages.filter(function(age){if (age>=21) return true;})

const canDrink = ages.filter(age=>age>=21)

// console.log(canDrink)

// ----------------------- Filter reatail companies--------------------

// const retailCompanies = companies.filter(company=>company.category==="Retail")
const retailCompanies = companies.filter(function(company){
    if(company.category==="Retail") return true;
})

// console.log(retailCompanies)

//----------------------------- Get 80's companies---------------------------

const get80sCompanies = companies.filter(company=>(company.end>=1980&& company.start<1990))
// console.log(get80sCompanies)

//--------------- Get companies last 10 years atleast-------------------------

// const lastTenYears = companies.filter(company=>(company.end-company.start)>=10)
const lastTenYears = companies.filter(function(company){
    
    if(company.end-company.start>=10) {
        // console.log(company.end-company.start);
        return true;
    }
})
// console.log(lastTenYears)

// ================================ map()===================================

//----------------------------- create array of company names ------------------------

const companyNames = companies.map(function(company){
    return company.name
})


// console.log(companyNames)

const testMap =  companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;
})

// const testMap=companies.map(company=>`${company.name} [${company.start}-${company.end}]`)

// console.log(testMap);

// -------------------------------- Create array of ages square ----------------------------

// const ageSquare = ages.map(age=>age*age);
const ageSquare = ages.map(age => Math.pow(age,2))
// console.log(ageSquare)

// -------------------------------- Create array of ages square root ----------------------------

const ageSqrt = ages.map(age => Math.sqrt(age))
// console.log(ageSqrt)  

// ================================ sort()===================================

// --------------------- Sort companies by starting Date -------------------------

// const startDateSort = companies.sort(function(c1,c2){
//     if(c1.start>c2.start) return 1;
//     else if(c1.start<c2.start) return -1;
//     else return 0;
// })

const startDateSort = companies.sort((a,b)=>(a.start>b.start)?1:-1)

// console.log(startDateSort)



// --------------------- Sort Ages ---------------------

const sortAges = ages.sort((a,b)=>(a>b?1:-1))
// console.log(sortAges)


// ================================ reduce()===================================

// --------------------- Add all ages together --------------------- 

const ageSum = ages.reduce((total, age)=> total+age,0)
// console.log(ageSum)

// --------------------- TOTAL YEARS OF ALL COMPANIES --------------------- 

const totalYears = companies.reduce((total, company)=> total+company.end-company.start,0)
// console.log(totalYears)


// ================================ combine all methods===================================

const combined = ages
    .map(age=>age*2)
    .filter(age => age>=40)
    .sort((a,b)=>a-b)
    .reduce((total,age)=> total+age,0)


    // console.log(combined)