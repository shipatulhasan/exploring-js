const friends = [
    20, 21, 24, 28, 12,
    13, 18, 20, 22, 25,
    28
  ]

//   Slice(strat, end)//
//  @parameter start
// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.

// @parameter end
// The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.

const partial = friends.slice(2, 6)
console.log(partial)

//splice
// The zero-based location in the array from which to start removing elements.

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//(2,3, 55, 43, 39)
// here 2 is starting point and 3 is deletecount. we start from index 2 and delete 3 element next to it. After deleting we will add those element.

const cut = friends.splice(2, 3, 21, 55, 43, 39)
console.log(friends)