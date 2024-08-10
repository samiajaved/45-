//Q41:Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

let megicianNames = [
    'Teller',
    'devid Blaine',
    'Dynamo'
]

 function showMegician (megicianNames:string[]){
    megicianNames.forEach(megicianNames => {
        console.log(megicianNames);
        
    });
 }



showMegician(megicianNames)