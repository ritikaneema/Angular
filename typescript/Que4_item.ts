class Items{
    itemid:number
    itemname:string
    itemprice:number
    category:string

    constructor(itemid,itemname,itemprice,category)
    {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.category=category
    }
    display=() =>{
        return this.itemid+ " " +this.itemname+" "+this.itemprice+" "+this.category;
    }
}
 let item =new Items( 1 ,"ritika",1100,"shirt");
 let item1 =new Items( 2 ,"aditiya",1100,"tshirt");
 let item2 =new Items( 3 ,"ritika",1100,"Top");

 console.log(item1.display());