var triangle = function(a, b, c) {

  var result;

  if ((a + b < c) | (a + c < b) | (b + c < a)) {
    result = "no actual"
  } else if (a === b && b === c) {
    result = "an equilateral";
  } else if ((a === b && b !==c) | (a === c && b !== c) | (b === c && a !== b)) {
    result = "an isosceles";
  } else if (a !== b && a !== c && b !== c) {
    result = "a scalene";
  }
  return result;
};

var angleCheck = function(a,b,c) {
  var resultTwo;
  var smallerSides = Math.pow(a, 2) + Math.pow(b, 2);
  var hypotenuse = Math.pow(c, 2);

  if (triangle(a,b,c) === "no actual") {
    resultTwo = "Sorry!"
  } else if (c < a | c < b) {
    resultTwo = " ";
  } else if (smallerSides === hypotenuse) {
    resultTwo = "Right angle!";
  } else if (smallerSides > hypotenuse) {
    resultTwo = "What a-cutey!";
  } else if (smallerSides < hypotenuse) {
    resultTwo = "How obtuse!";
  }
  return resultTwo;
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideA = parseFloat($("input#sideA").val());
    var sideB = parseFloat($("input#sideB").val());
    var sideC = parseFloat($("input#sideC").val());
    var result1 = triangle(sideA, sideB, sideC);
    var result2 = angleCheck(sideA, sideB, sideC);

    $(".sideA").text(sideA);
    $(".sideB").text(sideB);
    $(".sideC").text(sideC);
    $(".result1").text(result1);
    $(".result2").text(result2);

    $("#results").show();
    event.preventDefault();
  });
});
