function highestMark(mark1, mark2, mark3) {
  const highest = Math.max(mark1, mark2, mark3);
  const prize = 'cake';
  if (mark1 == highest) {
    return {
      "wow!!!!!!!!!! Jimmy you obtaining the highest number. your mark is ":
        highest,
      "so you will get the ": prize,
    };
  } else if (mark2 == highest) {
    return {
      "wow!!!!!!!!!! Dalia you obtaining the highest number. your mark is ":
        highest,
      "so you will get the ": prize,
    };
  } else {
    return {
      "wow!!!!!!!!!! Ciku you obtaining the highest number among all. your mark is ":
        highest,
      "so you will get the ":prize
    };
  }
}
var marks = highestMark(92, 89, 90);
console.log(marks);
