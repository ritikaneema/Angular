var multiplestring = function (str) {
    str.forEach(function (value) {
        console.log(value + " " + value.length);
    });
};
multiplestring(["ravi", "lavi"]);
