//++++++++++++++JavaScript Execution Context++++++++++++++++++++
//meaning you create a any file javascript how to excute(run) it

/*JavaScript file excute or run in a two face

step 1: you create a file then automatically create a Global Execution Context
Global EC is kept inside 'this' variable

2: Funcation/ Functional Excute Context
3: Eval Excute Context
*/

/*How to run JavaScript code ? it's actually run in two phases 
1.Memory Creation Phase also call Memory Phase some time called Creation Phase
   In the memory creation phase, space is only allocated for your variable or whatever you have declared. They not excuted.
   Whatever mathemetical funcation you have written, like plus, minus or multiply nothing happens there .
NOTE : Memory allocation in the Memory phace.
2.Excutetion Phase
    In this phase They excuted Whatever mathemetical funcation you have written, like plus, minus or multiply nothing happens there .
  
NOTE : Memory allocation in the Memory phace.  */


/*step 1: Global Execution 
step2 : Memory Phase: val1 & val2 = undefined,
        addNum is function = defination
        result1 = undefined
        result2 =  undefined
step3: Execution Phase: val1 = 10,
                        val2 = 5
                        addNUm = reProcess(new variable+ execution thred) and after reProcess deleted
                        result1 = 15 
                        result2 = reProcess(new variable+ execution thred) and after reProcess deleted
                            Memory Phase: val1 = undefined, val2 = undefined , total =undefined
                            Excution Phase: num1 = 10 , num2 = 2, total = 12
                        result2 = 12 */
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total =  num1 + num2 
    return total
}
let result1 =  addNum(val1, val2)//here val1 is num1 and val2 is num2
let result2 = addNum(10, 2)

/*+++++++++CALL STACK+++++++++++++++++++
 */
function one() {
    console.log("one")
    //two()
}
function two() {
    console.log("two")
    //three()
}
function three() {
    console.log("three")
}
one()
two()
three()