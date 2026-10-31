class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){//static use to stop access a method or property
        return`123`
    }
}
 const mahek = new User("mahek")
// console.log(mahek.createId())

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email =email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId());//show error beacuse you get static , you get static child also can't access it

