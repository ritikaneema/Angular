var Items = /** @class */ (function () {
    function Items(itemid, itemname, itemprice, category) {
        var _this = this;
        this.display = function () {
            return _this.itemid + " " + _this.itemname + " " + _this.itemprice + " " + _this.category;
        };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Items;
}());
var item = new Items(1, "ritika", 1100, "shirt");
var item1 = new Items(2, "aditiya", 1100, "tshirt");
var item2 = new Items(3, "ritika", 1100, "Top");
console.log(item1.display());
