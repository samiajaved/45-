//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy 
//of the array of magicians’ names. Because the original array will be unchanged, return the new array and 
//store it in a separate array. Call show_magicians() with each array to show that you have one array of the 
//original names and one array with the Great added to each magician’s name.


let megicianNames = [
    'Teller',
    'devid Blaine',
    'Dynamo'
]



// function use again from exersise 41
 function showMegician (megicianNames:string[]){
    megicianNames.forEach(megicianNames => {
        console.log(megicianNames);
        
    });
 }




function make_great(megicianNames:string[]):string[]{
    let greatMegician = [''];
    megicianNames.forEach(megicianNames => {
        greatMegician.push(`${megicianNames} the great`)
    });
    return greatMegician;
}

let greatMegicians = make_great(megicianNames.slice())

console.log("original megician names;");

showMegician (megicianNames)

console.log("great megicians;");

showMegician (greatMegicians)

