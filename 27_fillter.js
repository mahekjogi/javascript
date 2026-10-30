const coding = ["js", "rb", "py","java"]


const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values)
//NOTE : for each loop can't return values if you wtitr manually or not
//if you eritr like this they print a values but not return any thing show undefined
//you like to return any thing you need to manually write a write return keyword 

const myNum = [1,2,3,4,5,6,7,8,9,10]
//you have for each loop like that you have a fillter
//in fillter (method) Array<number>.filter<number>(predicate: (value: number, index: number, array: number[])
//  => value is number, thisArg?: any): number[] (+1 overload)

//NOTE : fillter have also use call back method
//this is a one line arrow function
const newNums = myNum.filter( (num) => num > 5 )
console.log(newNums);

//Note : whenever we use fillter inside it you will get a call back function
//in which every value will be accessed, but after that you have to give a condition
//condition satisfies and if condition is true those value will be return
//other wise not return

//her you don't write a any variable to store it that can't print beacuse without shorege where is that store
//fillter returna the value

const newNums1 = myNum.filter( (num) => {
    return num > 5
})//here you write in a {} that means a scope in the scope you need to write a return keyword
console.log(newNums1);

const newNums2 = []
myNum.forEach( (num) => {
    if (num >6) {
        newNums2.push(num)
    }
})
console.log(newNums2);

//Examples
//example like a database
const books = [
    { title: 'book one' , genre: 'fiction', publish: 1981, edition: 2004},
    { title: 'book two' , genre: 'non-fiction', publish: 1999, edition: 2006},
    { title: 'book three' , genre: 'history', publish: 2006, edition: 2010},
    { title: 'book four' , genre: 'science', publish: 2000, edition: 2008}

];
//here bk is object and bk.genre access genre and == 'history' access history books
let userBooks = books.filter( (bk) => bk.genre === 'history' )
//userBooks = books.filter( (bk) => bk.publish == 2000)
userBooks = books.filter( (bk) => { 
    return bk.publish == 2000 && bk.genre === 'science'
})

console.log(userBooks);
