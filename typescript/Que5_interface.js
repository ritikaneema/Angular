var Cone = /** @class */ (function () {
    function Cone(radius, height) {
        this.shapename = "cone";
        this.radius = radius;
        this.height = height;
    }
    Cone.prototype.printname = function () {
        console.log(this.shapename);
    };
    Cone.prototype.area = function () {
        return 4 * 3.14 * this.radius * this.radius;
    };
    return Cone;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        this.shapename = "Rectangle";
        this.length = length;
        this.breadth = breadth;
    }
    Rectangle.prototype.printname = function () {
        console.log("this.shapename");
    };
    Rectangle.prototype.area = function () {
        return this.length * this.breadth;
    };
    return Rectangle;
}());
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        this.shapename = "Sphere";
        this.radius = radius;
    }
    Sphere.prototype.printname = function () {
        console.log(this.shapename);
    };
    Sphere.prototype.area = function () {
        return 4 * 3.14 * this.radius * this.radius;
    };
    return Sphere;
}());
var cone = new Cone(2, 3);
cone.printname();
console.log(cone.area());
var rectangle = new Rectangle(2, 4);
rectangle.printname();
console.log(rectangle.area());
var sphere = new Sphere(2);
sphere.printname();
console.log(sphere.area());
