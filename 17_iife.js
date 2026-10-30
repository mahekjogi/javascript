//IIFE - Immediately Invoked Function Expressions

/*iife use for a pollution from the global scope often causes problems 
So, we use IIFE to prevent pollution from the globle scope's variables or declaretions */

(function chai(){
    //here the funcation chai is anamed IIFE beacuse they have a name
    console.log(`DB CONNECTED`);
})() ;//for a breal iife you need to write a ; 
//firest breket() use for a creating a block and define a function in it
//second breket() use for a excute a function

//this code was not excute show the error because of the iife can't stope or break atomatically you need brek it  
( (name) => {
    //without named IIFE called simple IIFE
    console.log(`DB CONNECTED TOW ${name}`);
})('mahek')
