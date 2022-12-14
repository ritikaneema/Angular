interface shape
{
    shapename:string
    printname():void
}

 class Cone implements shape
 {
    private radius:number;
    private height:number;
    
    constructor(radius:number,height:number)
    {
        this.radius=radius;
        this.height=height;
    }
    shapename ="cone";
    printname()
    {
        console.log(this.shapename);
    }
    area():number
    {
        return 4*3.14*this.radius*this.radius;
    }
 }

 class Rectangle implements shape
 {
    private length:number;
    private breadth:number;
    constructor(length:number,breadth:number)
    {
        this.length=length;
        this.breadth=breadth;
    }
    shapename ="Rectangle";
    printname()
    {
        console.log("this.shapename")
    }

    area():number
    {
        return this.length * this.breadth;
    }
 }
 class Sphere implements shape
 {
    private radius:number;
    constructor(radius:number)
    {
        this.radius=radius;
    }
    shapename: string="Sphere";
    printname()
    {
        console.log(this.shapename);
    }

    area():number
    {
        return 4*3.14*this.radius*this.radius;
    }

 }

 let cone = new Cone(2,3);
 cone.printname();
 console.log(cone.area());

 let rectangle = new Rectangle(2,4);
 rectangle.printname();
 console.log(rectangle.area());

 let sphere=new Sphere(2);
 sphere.printname();
 console.log(sphere.area());
