class User{
    constructor(username){
        this.username = username//set usernmae
    }
    logMe(){//logMe is a methode use to get a value
        console.log(`username is ${this.username}`);
        
    }
}
//extends is a keyword like a prototype
//constructoe overwrite
class Theacher extends User{
    constructor(username,email, password){
        super(username)//super is a keyword
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const chai = new Theacher("chai", "chai@gmail.com", "123")
chai.addCourse()
const masalaChai = new User("masalachai")
masalaChai.logMe()
console.log(chai === masalaChai);
console.log(chai === Theacher);
console.log(chai instanceof Theacher);
console.log(chai instanceof User);


