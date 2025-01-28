function foo(a, b) {
  // Explicit type conversion using parseInt()
  a = parseInt(a, 10);
  b = parseInt(b, 10);
  return a + b;
}

console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 1)); // Output: 2