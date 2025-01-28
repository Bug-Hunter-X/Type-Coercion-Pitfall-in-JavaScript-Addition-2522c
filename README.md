# JavaScript Type Coercion Bug
This repository demonstrates a common error in JavaScript stemming from its loose type system and automatic type coercion.  The `+` operator exhibits unexpected behavior when dealing with mixed number and string operands.

## The Problem
JavaScript's `+` operator will concatenate strings instead of performing numerical addition if either operand is a string.  This leads to unexpected behavior if not handled carefully.

## Reproducing the Bug
The `bug.js` file contains code demonstrating this behavior.  Running this code will show the unexpected concatenation instead of the expected numerical sum.

## Solution
The `bugSolution.js` file offers a solution by explicitly converting the operands to numbers before performing addition using `parseInt()` or `Number()`.  This ensures consistent numerical addition regardless of the input types.