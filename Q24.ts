// Q24: More Conditional Tests: You don’t have to limit the number of tests you create 
// 10. If you want to try more comparisons, write more tests. Have at least one True 
//and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to`
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array



console.log("testing equality and inequality with strings:");
console.log("red" === "red")
// console.log("green" === "Green")

console.log("test using the lower case")
console.log("Apple".toLocaleLowerCase() === "apple")


console.log("numerical test involving equality and inequality:");
console.log(4 === 4)
console.log(4 != 4)

console.log("numerical test with greater than and less than");
console.log(6 > 5)
console.log(5 > 6)

console.log("numerical test with greater than equal to and les than equal to");
console.log(7 >= 6)
console.log(7 <= 6)

console.log("test using and or or operator");
console.log(true && false)
console.log(true || false);

let fruits = ['mango', 'graps', 'leeche', 'banana']
console.log("is 'mango' in fruits? ")
console.log(fruits.includes("mango"));

console.log(" Is 'banana' not in fruits");
console.log(!fruits.includes("banana"));