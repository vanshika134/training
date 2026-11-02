let a = 20.09;
let b = 34;
console.log(a + b);   // to print anything we use console.log() function
console.log(typeof a);  // to check the data type of variable we use typeof operator
console.log(typeof b);  // to check the data type of variable we use typeof operator

{
    a = 25  // var default scope is global and let default scope is block level
}
console.log(a);

{
    let a = 50;  // let default scope is block level
    console.log(a)
}
console.log(a);  // it will print 25 because let is block level scope

{
    const age = 25
}
// console.log(age);  // it will give error because const is block level scope and we can't change the value of const variable


let p = 80
function sum()
{
    var q = 25
    {
        var r = 60
    }
    console.log(p,q,r)
}
sum()  // it will print 80,25,60 because var default scope is global and let default scope is block level

function sum2(a,b)
{
    return a+b
}
console.log(sum2(10,20))  // it will print 30 because we are passing 10 and 20 as arguments to the function sum2


let AGE = "80"
// let AGE = "ABC"  // NaN
console.log(Number(AGE))

let y = 8
let z = "5"
let w = a+b
// let w = a-b
// let w = a*b
// let w = a/b
console.log(w)

// VARIABLES ( container )
// var(changable) 
// let(changable)
// const(constant) 

// DATA TYPES(PRIMITIVE NON-PRIMITIVE)
// 1. String
// 2. Number
// 3. Boolean
// 5. Undefined
// 4. Null    let b = null (iska data type object ata hai)
// 6. Object  let a = [1,2,3,4,"Trainx,True"]  console.log(typeof(a),a)  // it will print object [1,2,3,4,"Trainx,True"]    -- key value pairs
// 7. Symbol
// 8. BigInt

// FUNTIONS

// TYPE CONVERSION & TYPE COERCION
// PARSEINT()  // it will convert string to number
// PARSEFLOAT()

// if output in yellow meaning it is a number and if output in blue meaning it is a string

// Download ( antigravity ide )
// Download ( node for windows)