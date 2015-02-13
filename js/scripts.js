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
  var result_two;
  var smallerSides = Math.pow(a, 2) + Math.pow(b, 2);
  var hypotenuse = Math.pow(c, 2);

  if (triangle(a,b,c) === "no actual" | c < a | c < b) {
    result_two = " ";
  } else if (smallerSides === hypotenuse) {
    result_two = "Right angle!";
  } else if (smallerSides > hypotenuse) {
    result_two = "What a-cutey!";
  } else if (smallerSides < hypotenuse) {
    result_two = "How obtuse!";
  }
  return result_two;
};


$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());
    var result1 = triangle(a, b, c);
    var result2 = angleCheck(a, b, c);

    $(".sideA").text(sideA);
    $(".sideB").text(sideb);
    $(".sideC").text(sidec);
    $(".result1").text(result1);
    $(".result2").text(result2);

    $("#results").show();
    event.preventDefault();
  });
});
