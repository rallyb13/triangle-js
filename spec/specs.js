describe('triangle', function() {
  it("will recognize an equilateral triangle", function() {
    expect(triangle(3,3,3)).to.equal("an equilateral");
  });

  it("will recognize an isosceles triangle", function() {
    expect(triangle(2,1,2)).to.equal("an isosceles");
  });

  it("will recognize a different isosceles, with c as different", function() {
    expect(triangle(3,3,4)).to.equal("an isosceles");
  });

  it("will recognize any isosceles", function() {
    expect(triangle(1,1,1.4)).to.equal("an isosceles");
  });

  it("will recognize a scalene triangle", function() {
    expect(triangle(3,4,5)).to.equal("a scalene");
  });

  it("will recognize when three sides cannot make a triangle", function() {
    expect(triangle(1,1,7)).to.equal("no actual");
  });

  it("will recognize non-triangles even if the user fails to enter the longest side last (as instructed)", function() {
    expect(triangle(10, 1.5, 4)).to.equal("no actual");
  });
});

describe('angleCheck', function() {
  it("will return no result if the longest side is not entered last (as instructed)", function() {
    expect(angleCheck(4, 2, 2)).to.equal(" ");
  });

  it("will recognize a right triangle", function() {
    expect(angleCheck(3,4,5)).to.equal("Right angle!");
  });

  it("will recognize an acute triangle", function() {
    expect(angleCheck(2,2,2)).to.equal("What a-cutey!");
  });

  it("will recognize a triangle that has an obtuse angle", function() {
    expect(angleCheck(3,3,5)).to.equal("How obtuse!");
  });

  it("will use the triangle function to give no answer for sides that aren't triangles", function() {
    expect(angleCheck(1,1,7)).to.equal("Sorry!")
  });
});
