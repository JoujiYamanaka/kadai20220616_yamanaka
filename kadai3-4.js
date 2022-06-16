var someArray = [9, 2, 5];
for (var item in someArray) {
    console.log(item); // 0,1,2
}
var someArray2 = [9, 2, 5];
for (var _i = 0, someArray2_1 = someArray2; _i < someArray2_1.length; _i++) {
    var item2 = someArray2_1[_i];
    console.log(item2); // 9,2,5
}
