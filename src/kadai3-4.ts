var someArray = [9, 2, 5];
for (var item in someArray) {
  console.log(item); // 0,1,2
}

var someArray2 = [9, 2, 5];
for (var item2 of someArray2) {
  console.log(item2); // 9,2,5
}
