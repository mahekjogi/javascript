//if statment
//syntax: if is a keyword, () in this write a condition , and {} create a scopoe
// if you write true in condition so enter and excute the scope but you write a flase not enter in and not execute a scope 

//condition operators <, >, <=, >=, = use for a assignment 
// == use for a check value is equal , != call not equal to use for value is not equal to other value
// === alled a strick equal use for a check type if both are same same type so excute if other wise not excute is
//!== 
if(2 === "2"){
    console.log("executed");
}
const temperature = 50
if(temperature >= 55){
    console.log("less than 50");
 }else{
     console.log("temperature is greater than 50");
}
//console.log("temperature is greater than 50");//this consol.log definitely print because the not connected with if 
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}
//you write var keyword at the coonst power keyword, outside the block that can work and excute or aeccss also 
//console.log(`user power: ${power}`);//if you write it outside the scope show the error was power is not defined

//shorheand notestion (Impisite scope- excute in one line, if you like to write multiple line get , at the end of the line and write into next line)
const balance = 1000
if(balance > 500) console.log("test");
//but it's not right way to write a code so don;t write like this 

if(balance < 500){
    console.log("less than 500 ");
}else if(balance < 750){
    console.log("less than 750 ");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
//&& AND condiation
//you use && so all condition are need to true if any condition are flase so code can not excute
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
// if(userLoggedIn && debitCard && 2==3){//this code not excute beacuse here 2==3 is the false condition
//     console.log("Allow to buy course");
// }

// || OR condition in this you can write both true and false condition also use as multiple condition
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
}