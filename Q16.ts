// Q 16: More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
//people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your 
//list. • Print a new set of invitation messages, one for each person in your list.

let guest: string[] = ['nisha', 'alyana', 'john'];

guest.unshift('saba');

guest.splice(2,0 ,'herry');

guest.push('mike');

guest.forEach(guest=>{
    console.log(`hi ${guest}, I'd like to invite you for dinner, I've found a bigger dinner table.`)
})
