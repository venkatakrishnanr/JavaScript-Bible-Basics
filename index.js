/**
 * JS-BASICS/CORE/CHALLENGES/02-operators
 * 
 */
/**
 * TASK 1
 * 
 * Compare 2 variables "myVariable1" and "myVariable2".
 * Log to the console "true" if "myVariable1" is less than or equal to "myVariable2". 
 * Convert both variables to numbers before comparison. 
 */

// let myVariable1=10
// let myVariable2="5";

// console.log(+myVariable1 <= +myVariable2);//false

// myVariable1="20";
// myVariable2=100;

// console.log(+myVariable1 <= +myVariable2);//true

/**
 * TASK 2
 * 
 * Print to the console remainder of the division of "myNumber1" by "myNumber2".
 * Which precedence and associativity has this operator?
 */
// let myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
// let myNumber2 = 3;

// console.log(myNumber1 % myNumber2);
// console.log( 25 % 5);
// console.log ( 14 % 8);

// console.log( 100 % 30 % 3); //1 - Left to right associativity




/**
 *  TASK 3
 * 
 * What will be logged to the console?
 */
//console.log(3 || true && null || false);//3 // STEP 1: true && null -> null
// STEP 2: 3 || null -> 3
// STEP 3: 3 || false -> 3


/**
 * TASK 4
 * 
 * Find alternatives
 */
// let a = 10;

// a += 1; 
// console.log(a);

// a *= 2; 
// console.log(a);

// a -=5; 
// console.log(a);

// a /= 2; 
// console.log(a);