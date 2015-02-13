Benjamin's "Try My Triangle" Triangle Checker (in JavaScript)!

MIT License
Created by Benjamin D. Herson

Basics:
I've built two functions here.
The first (required) one simply compares the side lengths to determine if the triangle is equilateral, isosceles, scalene, or not a possible triangle.
The second (for fun) one requires that the user follow the instruction to enter the longest side last. If so, it'll determine if the triangle is acute, obtuse, or right.

Bugs?:
The angleCheck can't doesn't yet handle approximation, so 1, 1, 1.414 returns an acute triangle rather than a right angle.

Obviously, I *could* make the angleCheck work even if the user failed to follow my longest-side-last instruction, but I'm not especially inclined to.
