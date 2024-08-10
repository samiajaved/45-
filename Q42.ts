//Q42 : Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great
//() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


let megicianNames= ['Teller', 'Devid Blaine', 'Dynamo']
 

function make_great(megicianNames:string[]){
    for( let i=0; i< megicianNames.length; i++){
        console.log(megicianNames[i] + " the Great ")
        
    }
}

make_great( megicianNames)

                     
