var check = function (str) {
    if (str == str.split("").reverse().join("")) {
        console.log("String is Palaindrom");
    }
    else {
        console.log("String is not palaindrom");
    }
};
check("ritika");
