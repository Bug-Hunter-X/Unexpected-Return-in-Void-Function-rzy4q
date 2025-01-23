//Correcting Type Annotation
function printOddNumbersCorrected(n: number): number[] {
  const oddNumbers: number[] = [];
  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}

console.log(printOddNumbersCorrected(10));

//Alternative: Removing the return statement
function printOddNumbersCorrected2(n: number): void {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

printOddNumbersCorrected2(10);