class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //you geta getter so you also add setter
    //getter methode use for a get value from outside the class
    //you need to set any value in the class for that use setter
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
        // return `${this._password}mahek`
    }
    set password(value){
        this._password = value//.toUpperCase()
    }
}
const mahek = new User("mahek@hmail.com" , "abc")
console.log(mahek.password);
console.log(mahek.email);