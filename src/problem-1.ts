const sumArray = (numberArray: number[]): number => {
  let result: number = 0;
  numberArray.forEach((number1: number) => (result = result + number1));
  return result;
};

sumArray([1, 2, 3, 4, 5]);
