const user = {
    username: "mahek",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //here this keyword use for current context
        console.log(this)//here only this print before change context and after change context
    }
}
user.welcomeMessage()
user.username = "sam"//change the context(value)
user.welcomeMessage()
//console.log(this)//here you wite this output was empty{} parenthesis or empty object

// function chai(){
//     let usernmae = "mahek"
//     //if you write this in the function means in a block show many lines of  output 
//     console.log(this);
// }
// chai()

/*const chai = function(){
    let usernmae = "mahek"
    console.log(this.username);
}
chai()//here you write like this using chai variable output is undefined*/

//for arrow function you the function key word and add => a signed after () brekets thats call a arrow function 
const chai = () => {
    let usernmae = "mahek"
    console.log(this)
}
chai()