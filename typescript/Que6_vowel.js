var Task = /** @class */ (function () {
    function Task() {
    }
    Task.prototype.setdata = function (str) {
        this.str = str;
    };
    Task.prototype.countAplhabate = function (str) {
        var count = 0;
        if (str.charAt(0) == 'a' || str.charAt(0) == 'u' || str.charAt(0) == 'e' || str.charAt(0) == 'i' || str.charAt(0) == 'o') {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == 'a' || str.charAt(i) == 'u' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o') {
                    count++;
                }
            }
            console.log(str.split(" ").join("").length - count);
        }
        else {
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == 'a' || str.charAt(i) == 'u' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o') {
                    count++;
                }
                else {
                    for (var i_1 = 1; i_1 < this.str.length; i_1++) {
                        if (this.str[i_1] == 'a' || this.str[i_1] == 'e' || this.str[i_1] == 'i' || this.str[i_1] == 'o' || this.str[i_1] == 'u' || this.str[i_1] == 'A' || this.str[i_1] == 'E' || this.str[i_1] == 'I' || this.str[i_1] == 'O' || this.str[i_1] == 'U') {
                            count++;
                        }
                    }
                }
                console.log(count);
            }
        }
    };
    return Task;
}());
var obj = new Task();
obj.setdata("Ritika");
obj.countAplhabate(" ");
