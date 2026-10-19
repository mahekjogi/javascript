console.log(2 > 1);
console.log(2 >= 1);
console.log( 2 < 1);
console.log( 2 == 1);
console.log( 2 != 1);
console.log( 2 <= 1);

//type script not awolled to comparie two different datatype
console.log("2" > 1);
console.log("02" > 1);

//if you compair null with 0
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//if you compair undefined with 0 every time they return false
console.log(undefined > 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false

//== check equal value and conversion
//=== check equal value and type also
//!= not equal 
//!=== not equal value or not equal type