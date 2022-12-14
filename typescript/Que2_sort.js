var sortnum = function (element) {
    console.log(element.sort(function (a, b) { return a - b; }));
};
sortnum([1, 4, 3, 6]);
