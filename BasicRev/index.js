console.log("Manisha");


// Variable ---> Storage run time
var my_name = "Manisha";



/**  we can redeclare the varaible name declared by "var"
 * but we cannot do the same in case of "let"
 */ 
// ----- Example -------

// var my_name = "Anisha";(error free)
// let myEmail = "ansihakesy@gmail.com"; (uncomment to see error)
let myEmail = "manisahkesy@email.com";


console.log(my_name);


/** var : global scope (it can be used by the codes under the declared line of code)
 * let : block scope
*/

// -------- Global Scope --------

var a = 12;
// console.log(a);

{
    //Block scope
    var a = 20;  //redecalare
    console.log(a);
}

console.log(a);

// ---------- Block Scope ----------
let b =12;
{
    // Block Scope
    let b = 21;
    console.log (b);
}
console.log (b);

// constants ==> value remains fixed
const GRAVITY = 9.8;  //capital letters for universal truths
const PI = 3.14;

// string(text), number, boolean, null ==> Assigned to constant cannot be changed
// array, jason, object,==> value of constant can be changed

const user = {
    age : null
};
  user.age = 52
  console.log(user.age);
const users = [];

// ------ DataType --------
/**
 * string
 * ==> " ", ' ', ` `
 * number 
 * ==> 1, 2, 3, 4, 1.1, 1.2, -1, -2
 * Boolean
 * ==> true, false
 * null
 * ==> null, 0, false, "", '', ``
 * undefined
 * ==> undefined
 * Array
 * ==>seperated by commas  (single dimensional/multi dimensional)
 *     0    , 1     , ..... , n-1
 * ==>[value, values, ....., valuen]
 */

