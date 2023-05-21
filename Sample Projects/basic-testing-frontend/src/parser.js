export function extractNumbers(formData) {
  const num1Input = formData.get('num1');
  const num2Input = formData.get('num2');
  // console.log(`#1: ${num1Input}, #2: ${num2Input}`)

  return [num1Input, num2Input];
}

export function extractEnteredNumberValues(form) {
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  return numberInputs;
}