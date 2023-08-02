// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//
//   Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:



function comp(array1, array2){
  const sqrtArr = array2.map(item => Math.sqrt(item));
  const sortedArr1 = array1.sort((a, b) => b -a);
  const sortedsqrtArr = sqrtArr.sort((a, b) => b -a);

  const unicNumber = sortedArr1.filter((item, index) => item !== sortedsqrtArr[index]);

  if(unicNumber.length > 0){
    return false
  }else {
    return true
  }

}
