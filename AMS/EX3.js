function countUniqueItems(arr) {
    var unique = [];
    for (var i = 0; i < arr.length; i++) {
      if (!unique.includes(arr[i])) {
        unique.push(arr[i]);
      }
    }
    return unique.length;
  }

//let arr1 = [1, 2, 3, 4, 5];
//let arr2 = [1, 1, 1, 1, 1];
//let arr3 = ['a', 'b', 'c', 'a', 'd'];
//let arr4 = ['a', 'a', 'a', 'a'];
//let arr5 = [true, false, true, true, false];
//let arr6 = [null, undefined, null, undefined];
//let arr7 = [{}, {}, {}, {}];
//let arr8 = [{a: 1}, {b: 2}, {a: 1}, {c: 3}];
//let arr9 = [1, '2', 2, '1'];
//let arr10 = [NaN, NaN, NaN];
//
//console.log("1: "+countUniqueItems(arr1)); // Output: 5
//console.log("2: "+countUniqueItems(arr2)); // Output: 1
//console.log("3: "+countUniqueItems(arr3)); // Output: 4
//console.log("4: "+countUniqueItems(arr4)); // Output: 1
//console.log("5: "+countUniqueItems(arr5)); // Output: 2
//console.log("6: "+countUniqueItems(arr6)); // Output: 2
//console.log("7: "+countUniqueItems(arr7)); // Output: 1
//console.log("8: "+countUniqueItems(arr8)); // Output: 3
//console.log("9: "+countUniqueItems(arr9)); // Output: 3
//console.log("10: "+countUniqueItems(arr10)); // Output: 1