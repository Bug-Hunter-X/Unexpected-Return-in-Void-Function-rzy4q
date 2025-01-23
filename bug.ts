function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // Works fine

function printEvenNumbers(n: number): void {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

printEvenNumbers(10); // Works fine

//Incorrect Type annotation
function printOddNumbers(n: number): void {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
    return i;
  }
}

printOddNumbers(10); // This will return 1 and stop the loop unexpectedly