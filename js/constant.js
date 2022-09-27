

console.time("exec")

// Constants   null 

var _name =null;

console.log(_name);


var loan = 5000.00;

var dataType = typeof loan;

console.log(dataType);

console.log( typeof null)

console.log(typeof  undefined)

// Constant isNAN  is not a number 

var count = "ui";
console.log(isNaN(count));

var scores =45;

console.log(isNaN(scores));

var total = "456";

console.log(isNaN(total));


var grandTotal = "45rcvdff";

console.log(isNaN(grandTotal));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

var num1 = 786666666666667769;

console.log(num1)

// Console String formatting 

var item1 = "Computer";
var price = 56000.00;



console.log(" The price of %s is   $%f ",item1, price);

// Console CSS formatting 

var address = "http://www.google.com";

console.log("%cSimple Text","font-size:45px;color:red;border:solid 2px black;");



console.timeEnd("exec");