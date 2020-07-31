const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var i;
while (i < ingredients.length) {
  console.log (ingredients [i]);
}

for (var j= 0; j < ingredients.length; j ++) {
  console.log(ingredients [j]);
}

function reverseArray(arr) {
  var newArray = [];
  for (var k = arr.length - 1; k >= 0; k--) {
    newArray.push(arr[k]);
  }
  return newArray;
}
console.log(reverseArray(ingredients));
