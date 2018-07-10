function makeHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error ("Cannot construct Figure instances directly")
            }
        }

        toString (){
            return this.constructor.name;
        }

        get area(){
            return undefined;
        }
    }

    class Circle extends Figure{
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString(){
            return super.toString() + ` - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor (width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area (){
            return this.width * this.height;
        }

        toString(){
            return super.toString() + ` - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Circle,
        Rectangle,
        Figure
    }
}

let Objs = makeHierarchy();
let Figure = Objs.Figure;
let Circle = Objs.Circle;
let Rectangle = Objs.Rectangle;

// let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());  //Rectangle - width: 3, height: 4