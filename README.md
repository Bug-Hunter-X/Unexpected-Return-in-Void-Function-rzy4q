# TypeScript Bug: Unexpected Return in Void Function

This repository demonstrates a subtle bug in TypeScript related to incorrect type annotations on functions that don't consistently return values.  The `bug.ts` file contains a function `printOddNumbers` that's incorrectly annotated as `void` but includes a `return` statement within a loop. This leads to unexpected behavior.

The solution in `bugSolution.ts` corrects the type annotation or removes the unintended return statement to fix the problem.

This bug highlights the importance of carefully considering return types in TypeScript and ensuring consistency between the type annotation and the function's actual behavior.