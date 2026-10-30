const coding = ["js", "rb", "py","java"]
//it's higher order function
//you write a coding(array name). all methods you show 
//here we get a foreach method in that we use callback function means give me a function
//write a function keyword  , here we are use callback fn in that not need to write a name,
//in  () you write a item , values depend on which types of values in array 

//here use function keyword
coding.forEach( function (item) {
    console.log(item)
})

//here using arrow function 
//in arrow function also not write a name
coding.forEach( (item) => {
    console.log(item);
})
//here printMe means print the items
function printMe(item){
    console.log(item);
}
//we write before it's so you can get the rfrence and this can print it
coding.forEach(printMe)
//here not only a items perameters other paremeter or values  also have like index , arr 
coding.forEach(( item, index, arr) => {
    console.log(item, index, arr );//arr for geting full array list
})
/*js 0 [ 'js', 'rb', 'py', 'java' ]
rb 1 [ 'js', 'rb', 'py', 'java' ]
py 2 [ 'js', 'rb', 'py', 'java' ]
java 3 [ 'js', 'rb', 'py', 'java' ] 
 here js is a item , 0 is a index and full array is arr also have access for every onr*/

//[{},{},{}] in array some time we have objects

const myCoding = [
    {
        languageName: "js",
        languageFillNmae: "js"
    },
    {
        languageName: "java",
        languageFillNmae: "java"
    },
    {
        languageName: "py",
        languageFillNmae: "py"
    }
]
//here you like to access any one value like languagename or languagefillname so you write a .leanguagename
myCoding.forEach( (item)=>{
    console.log(item.languageName);
})