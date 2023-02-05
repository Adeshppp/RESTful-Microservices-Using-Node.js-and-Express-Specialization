const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = -1; 

    if(choice=="square" && (typeof(side)!='number' || side<0)) return area;
    if(choice=="rectangle" && (typeof(length)!='number' || typeof(breadth)!='number' ||length<0 || breadth<0)) return area;
    if(choice=="circle" && (typeof(radius)!='number' || radius<=0)) return area;
        console.log("side ",side)
    switch(choice){
        case "square":
                return side*side;

        case "rectangle":
                return length*breadth;

        case "circle":
                return pi*radius*radius;
          
        default:
            area=-1;
            break;
    }
    return area
}
module.exports = {calculateArea}
