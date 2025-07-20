/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// was
// console.log("Welcome to the bootcamp

// Now: 
console.log("Welcome to the bootcamp");

// What’s Wrong?
// missing closing double quotes, closing parenthesis, and statement terminator

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

/* Was:
let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
*/

//Now: I chose to convert strings to a number by using an array of the words for
// the numbers from one to eight. Since one would technically be the first spot
// and have an index value of 0, I need to add 1 to my num. I'd have to increase
// my numberWords array if I had a string for numbers greater than 10, but at least
// this should populate the doubled array entirely and not skip since "eight" * 2 = NaN 
let numbers = [2, 4, "eight"];

let numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

for (let i = 0; i < numbers.length; i++) {
  let value = numbers[i];
  let num;

  if (typeof value === "number") {
    num = value;
  } else if (typeof value === "string") {
    let index = numberWords.indexOf(value.toLowerCase());
    if (index !== -1) {
      num = index + 1; // convert "eight" → 7 + 1 = 8
    } else {
      console.log(`Skipping invalid item: ${value}`);
      continue;
    }
  }

  let doubled = num * 2;
  console.log(`${value} doubled is: ${doubled}`);
}

// What’s Wrong?
// "eight" is not a number, so the *2 operation would result in NaN.


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// Was:
/*
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}
*/

// Now:
function isPrime(num) {
  if (num < 2) return false; // 1 and 0 are not prime numbers
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  // If num % i = 0, that means there is some
      // number i that can be divided into num that isn't 1 or num, thus not prime.
    }
  }
  return true; // If the condition num % i === 0 is false, the stuff in the if
  // statment is skipped, and therefore num is Prime.
}

console.log(isPrime(7)); // Output: True

// What’s Wrong?
// The boolean returns were in the wrong order.
// If the condition was true, the number shouldn't be a Prime number, but the
// original code would have said otherwise.  Obviously, if the first if and the if
// in the for loop were criteria for num not being Prime, and num didn't satisfy
// those criteria, then it should be a Prime Number.