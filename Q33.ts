//Q32:• Store the numbers 1 through 9 in a array.
//• Loop through the array.
//• Use an if-else chain inside the loop to print the proper ordinal ending for each 
//. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result 
//should be on a separate line.

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(numbers => {
    if(numbers === 1){
        console.log('1st')
    }
    if(numbers === 2){
        console.log('2nd');
    }
    if(numbers === 3){
        console.log('3rd');
    }
    if(numbers > 4){
        console.log(`${numbers}th`)
    }
 
});

