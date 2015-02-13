var Triangle = function(a, b, c) {

  var result;

  if ((a + b < c) | (a + c < b) | (b + c < a)) {
    result = "no actual"
  } else if (a === b && b === c) {
    result = "an equilateral";
  } else if ((a === b && b !==c) | (a === c && b !== c) | (b === c && a !== b)){
    result = "an isosceles";
  } else if (a !== b && a !== c && b !== c) {
    result = "a scalene";
  }
  return result;

};


// Your sides: a b & c
// Those create [] triangle
// is it right? it ain't right. it's so right!
