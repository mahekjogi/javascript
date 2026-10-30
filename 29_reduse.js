const myNum = [1,2,3,4]

// const myTotal = myNum.reduce( function (acc,currentval) {
    // console.log(`acc: ${acc} and currentval: ${currentval}`);
    // 
    // return acc+ currentval
// }, 0)
// console.log(myTotal);
/*How it's work
acc: 0 and currentval: 1
acc: 1 and currentval: 2
acc: 3 and currentval: 3
acc: 6 and currentval: 4
10  and 
you get 3 at the 0
acc: 3 and currentval: 1
acc: 4 and currentval: 2
acc: 6 and currentval: 3
acc: 9 and currentval: 4
last time turn loop and that addition value is a final answer
13 9 + 4*/

const myTotal = myNum.reduce( (acc,curr ) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 299
    },
     {
        itemName: 'mobile dev course',
        price: 2999
    },
     {
        itemName: 'data scinece course',
        price: 999
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay)