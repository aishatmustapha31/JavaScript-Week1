

// Function is used to group related code together 
//  You create a function by function keyword and the name of the function 

let counter=0;

function submitForm(){

    // counter = counter + 1;
    // console.log(`Counter = ${counter}`);

    let firstName = document.getElementById("firstName");
    let lastName =  document.getElementById("lastName");
    let reason = document.getElementById("reason");

    let amount = document.getElementById("amount");
    let numberOfMonths = document.getElementById("numberOfMonths");

    // console.log("FirstName = ", typeof firstName.value);
    // console.log("LastName = ", typeof lastName.value);
    // console.log("Reason ", typeof reason.value);
    // console.log("Amount ", typeof  amount.value);
    // console.log("Number of Months ", typeof numberOfMonths.value);

    let amountConverted=  Number(amount.value);

    // console.log("Converted Amount ", amountConverted, typeof amountConverted);

    let  monthsConverted = Number(numberOfMonths.value);

    let intrest = amountConverted * 0.3 * monthsConverted; 

    let TotalAmount = amountConverted + intrest; 

    let message = `<h4>Hello ${firstName.value} ${lastName.value}</h4>`;
        message = message + `<h5>Loan Amount: ${amountConverted}</h5>`;
        message = message + `<h5>Duration ${monthsConverted} Months</h5>`;
        message = message + `<h5>Intrest ${intrest} </h5>`;
        message = message + `<h5>Total Payment = ${TotalAmount}</h5>`;

   let output = document.getElementById("output");
   output.innerHTML = message;

}

function addition(number1, number2){

    let answer = number1 + number2;

    console.log(answer);

}


addition(5,10);