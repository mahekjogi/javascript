
//{} called scop not in a object but with funation if,else called scop 
//here any thing i write in if block called block scop 
//and outer the if bolck you write ant thing called global scop
let a = 300
if(true){
    let a = 10
    const b = 20
  console.log("inner:", a)
}
console.log(a);
//console.log(b);
//console.log(c);

function one(){
  const username = "mahek"
  function two(){
    const website = "youtube"
    console.log(username);
  }
  //console.log(website);
  two()
}
//child function can access parent variable
// one()

if(true){
  const username = "mahek"
  if(username === "mahek"){
    const website = " youtube"
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);
console.log(addone(5));
function addone(num){
  return num + 1
}

addTwo(5)
//not excute beacuse we write a function using vriable means variable holds function
const addTwo = function(num){
  return num + 2
}

