// ----------- Operators -------------
/**
 * Arithematic operators
 * +, -, *, /, %
 * Increment or Decrement
 *  ++, --
 * Assignment Operators
 * =, +=, ==, *=, /=, %=
 * String/Concatination
 * +, ,
 * Comparision Operator
 * <, >, <=, >=, ==, !=, === (comparision of datatypes), !==
 * Logical Operator (Comparision between two expressions)
 * &&, ||, !
 * Ternary or conditional
 * (exp)? true:false 
 * Spread Operator
 *   ... 
 */

// -------------- Comparison Operators -----------
let x = 10; //10
x = x+1; //11
x += 1; //12 number
let y = "12"; //string
x == y; //true
x === y; //false

// --------------- String/Concatination -----------
console.log("the value of x : "+x);
console.log("the value of x : ",x);


// -------------- Logical Operator -----------
(x == y) && (x === y);  //true && false ==> false
(x == y) || (x === y); //true || false ==> true
!((x == y) || (x === y)); //!(true || false) ==> !true ==>false 

// -------------- Ternary or conditional -------------
let age = (age && age >0 )? age : null;
let age_2 = age ?? null
let user = {
    name : "manisha",
    address:"pokhara"
    };
user?.email; //if user contains email then show that 

// ------------- Spread Operator --------
let admin = {
    ...user,
    role : "admin",
    email : "test@test.com"
};
