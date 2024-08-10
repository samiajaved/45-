// Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, 
// write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 
//points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just 
//earned 10 points.
//• Write one version of this program that runs the if block and another that runs 
//the else block.

let alian_color = 'green'
if(alian_color === 'green'){
    console.log("you just earned 5 points for shooting the alian.")
}
if(alian_color != 'green'){
    console.log("you just earned 10 points:")
}

alian_color = 'yellow'
if(alian_color === 'green'){
    console.log("you earned 10 points")
}else{
    console.log("you earned 5 points.")
}
