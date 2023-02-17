const swapDigits = (number)=>{

    let swappedNumber = 0
    if(number<=0) return swappedNumber;

    //write logic here
    let i=0;
    let n="";
    var str=""+number.toString();
    if(number.toString().length%2==1){
        i=1;
        n+=str[0];
    }
    for(let a=i;a<str.length-1;a=a+2) n+=str[a+1]+str[a];
    swappedNumber=parseInt(n);
    return swappedNumber;
}

module.exports = swapDigits
