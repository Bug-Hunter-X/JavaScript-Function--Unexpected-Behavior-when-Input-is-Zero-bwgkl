function foo(a, b) {
  if (a === 0 || b === 0) {
    return NaN; // Handle the case where either a or b is 0
  } else if (b === 0) { 
    return Infinity; // Handle division by zero
  }
  return a / b;
}