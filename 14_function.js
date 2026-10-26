//funcrion key word, funcation name, () is syntax,{is funcation defination}
//only funaction name is refrence and with () funaction name is excution
function sayMyName(){
    console.log("m");
    console.log("a");
    console.log("h");
    console.log("e");
    console.log("k");

}
sayMyName()
//you creat a function defination thier input call parameters here number1 and number2 is parematers
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
//and whenever call the function and get a values that call a argumnets 
addTwoNumbers(3, 4)//it's call argument

function addTwoNumbers1(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
//after the function return you can write any thing
const result = addTwoNumbers1(3,5)//output is 8
console.log("Result:", result);//ouput is undefined

function loginUserMessage(username){
    return`${username} just logged in`
}
console.log(loginUserMessage("mahek"))
//you just get a "" empty value so ouput is a just logged in 
//but you don't get value ouput is a undefiend just logged in

function loginUserMessage1(username1){
    if(username1 === undefined)//also write if(!username) !covert true into false and false into true
        {
        console.log("please enter a username");
        return
    }
    return`${username1} just logged in`
}
console.log(loginUserMessage1("mahek"))

//function loginUserMessage1(username1 = "sam") get default value

function calculateCartPrice(...num1){
//... call rest opretor use for combain all the values
    return num1
}
console.log(calculateCartPrice(200, 400, 600))//ouput in array

/*function calculateCartPrice(value1, value2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600)) 
output is a 600 only because in rest operetor we have only 600 
the 200 and 400 is are in the value 1 and value 2*/

const user = {
    username: "mahek",
    price: 300
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 300
})

const myNewArray = [200,300,400,600]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));