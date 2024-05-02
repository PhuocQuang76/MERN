//class - in ES6 is advanced version of functions and derives itself from function constructors

class Area {
    constructor(length, breadth){
        this.length = length
        this.breadth = breadth

    }


    AreaOfRectangle = function (){
        return this.length * this.breadth;
    }

    AreaOfRectangle = function () {
        return this.length *  this.breadth
    }

    AreaOfSquare = ()=> this.length*this.length
    
    AreaOfCircle = (radius)=> 3.141*radius*radius   
}

let areaObj = new Area(5,10)

console.log(areaObj.AreaOfRectangle())
console.log(areaObj.AreaOfSquare())
console.log(areaObj.AreaOfCircle(20))