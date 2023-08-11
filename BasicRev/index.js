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
let x; //undefined
x = 10;


// //  -------- one person -------
// let name = "";
// let email = "";
// let phone = "";
// let age = "";
 
// ---- Single dimensional Array ----
let person = ["user name",  //0
            "user@test.com", //1
             1234567891,     //2
             15               //3
];

console.log(person[0]);

// ------- Multi dimensional Array ------


let person1 = [["user", "name"],  //0
            "user@test.com", //1
             1234567891,     //2
             15               //3
];

console.log(person[0][0]);
console.log(person[0][1]);


let all_std = [];  //null,0

let first_std = [
    "student name",
    "class",
    "roll_no",
    "Address"
];

all_std[0] = first_std; //0 index

all_std.push(first_std);  //1 index

// top index(0)
// all_std[0] = first_std;  ==> replaces existing value
all_std.unshift(first_Std); // 0 ==> 0 --> 1, 1 --> 2


// top element 0 index return
let first_elem = all_std.shift(); //array

// last index element return
let last = all_std.pop(); //array

//delete using array
let indexed_val = all_std.slice(1,1); //slice removes data from array

let size = all_Std.length; //no. of elements in an array

//objects
let product = {
    name:"iphone13",
    price:138000,
    Discount:10,
    stock:5,
    Brand:"apple"
    };

let discount = product[1] - product[1] * product[2]/100;
let discount_1 = product['price'] - product['price'] * product['Discount']/100;
let discount_2 = product.price - product.price * product.Discount/100;

let keys =Object.keys(product)
let values = Object.values(product);


// ----------- JASON (universal datatype) ------------
let product_11 = {
    "name":"iphone13",
    "price":138000,
    "Discount":10,
    "stock":5,
    "Brand":"apple"
    };

let discount_22 = product[1] - product[1] * product[2]/100;
let discount_23= product['price'] - product['price'] * product['Discount']/100;
let discount_24= product.price - product.price * product.Discount/100;
