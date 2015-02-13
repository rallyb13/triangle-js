describe('Triangle', function() {
  it("will recognize an equilateral triangle", function() {
    expect(Triangle(3,3,3)).to.equal("an equilateral");
  });

  it("will recognize an isosceles triangle", function() {
    expect(Triangle(2,1,2)).to.equal("an isosceles");
  });

  it("will recognize a different isosceles, with c as different", function() {
    expect(Triangle(3,3,4)).to.equal("an isosceles");
  });

  it("will recognize any isosceles", function() {
    expect(Triangle(1,1,1.4)).to.equal("an isosceles");
  });

  it("will recognize a scalene triangle", function() {
    expect(Triangle(3,4,5)).to.equal("a scalene");
  });

  it("will recognize when three sides cannot make a triangle", function() {
    expect(Triangle(1,1,7)).to.equal("no actual");
  });

  it("will recognize non-triangles even if the user fails to enter the longest side last (as instructed)", function() {
    expect(Triangle(10, 1.5, 4)).to.equal("no actual");
  });
});
