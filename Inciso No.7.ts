//ANGIE MELISSA SANTIAGO RODRIGUEZ
//INCISO NO.7

function Factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * Factorial(n - 1);
    }
  }
  
  const number = 13;
  const result = Factorial(number);
  console.log(`El Número Factorial de ${number} es: ${result}`);