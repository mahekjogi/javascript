const userEmail = "m@hek.ai"//any value in it that asum it as ture value
if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
const userEmailone = []//if "" is empty so it's asum it as false value 
if (userEmailone) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

/* list of Falsy Values
1. false
2. 0, -0
3. BigInt 0n*
4. ""
5. null
6. undefined
7. NaN ( Not A Number)*/

/*list of Truthy value
1."0"//if 0 in a string that the truthy value
2.'flase' 
3. " "
4. []
5.{}
6.function(){}
string have a "" or '' have any value that the truthy vaiue also in string space is also truty value 
 */

if (userEmailone.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}//here the object.keys() create an array
if (Object.keys(emptyObj.length === 0)) {
    console.log("Object is empty");
}
//NOTES: false == 0 is true, false == '' is true , 0== '' is true

//Nullish Coalescing Operator (??): work on null and undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Ternaiary Operator
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"):console.log("more than 80")