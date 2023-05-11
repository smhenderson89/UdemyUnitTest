export function add(numbers) {
  let sum;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
