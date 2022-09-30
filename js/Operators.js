
let y=2;
let x = 7;

// Addition is a binary operator 
let z = y + x;

y = y +1 ;

y +=1;

  let lines = 70;
  let rows = 100;

  rows = rows + 10;

  rows +=20;

  console.log("Rows = ",rows);

  let message = "First line "
  message = message + ' Second Line '

  message += "Third Line"

  console.log(message);

  let val = 1;
    val = val * -1;
    val = 1 * -1;
    val = -1;
    val = -val;

    console.log(val);


// Substraction - 

let val1 =60;
let val2 = 35;
let ans = val1 - val2;
console.log(" Val1 - val2 =",ans);

let val4 =  val1--;

console.log(" val1-- = ", val4);
console.log(" val1 = ", val1);

let val5 = --val2;

console.log(" --val2 =",val5);

val5 -=5;

console.log(" val5 -=5 =", val5);


// Multiplication   * 

let y1 = 6;
let x1 =8;

let val200 = y1 * x1 ;

console.log(val200);

val200 *=5;

console.log(val200);

// Division / 


let salary = 45000;
let tax = 25;

let pay = salary  / tax;

console.log("Pay =",pay);

pay /= 2;

console.log("Pay /=2 ", pay);

// Remainder  or Modula Operator  %

let length = 10;
let breath = 5;
let remainder  =  length % breath;

console.log(remainder);


// Exponential   ** 

let val500 = 4**2;
console.log(val500);


//  Operators precedence   


let  olodo = (-2+5+7+9-6+6) * 3 * ( (8 -9)  / (2+6) )
    //   olodo     =  ( -2+5+7+9-6+6 )  * ( (3+8-9) / (2+6) )
    //     olodo   = ( 19) * ( (2) / (8) )
    //     olodo = (19)  * ( 0.25)
    //     olodo =  4.75;

    console.log("Olodo = ",olodo)


let olodo2 =  (-5+6+8-6)*6*(6+7)**(24/2);

    // olodo =(3)*6*(13) **(0)

    //olodo =234;
  console.log("Olodo2 = ",olodo2)