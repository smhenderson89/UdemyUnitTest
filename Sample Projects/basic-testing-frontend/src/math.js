import { cleanNumbers } from "./util/numbers.js";

export function add(numbers) {
  let sum = 0;

  // throw new Error('Something went wrong')

  for (const number of numbers) {
    sum += +number; // "+" -> convert string to array
    // console.log(`Add Numbers: ${sum}`);
  }
  return sum;
}

export function calculateResult(numberValues) {
  // valdiate input
  let result = '';
  try {
    const numbers = cleanNumbers(numberValues);
    // derive a result if result succeded or failed
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }
  // console.log(`Calculated result: ${result}`);
  return result;
}