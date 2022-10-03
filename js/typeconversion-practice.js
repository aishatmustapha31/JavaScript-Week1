
let counter=0


function submitForm(){
 
    let firstName= document.getElementById("firstName")
    let lastName= document.getElementById("lastName")
    let reason= document.getElementById("reason")
    let amount= document.getElementById("amount")
    let numberOfMonths= document.getElementById("numberOfMonths")


    let amountConverted= Number(amount.value)
    let monthsConverted= Number(numberOfMonths.value)
    let interest= amountConverted *0.3* monthsConverted
    let TotalAmount= amountConverted + interest



    let message = `<h4>Hello ${firstName.value} ${lastName.value}</h4>`;
        message = message + `<h5>Loan Amount: ${amountConverted}</h5>`;
        message = message + `<h5>Duration ${monthsConverted} Months</h5>`;
        message = message + `<h5>Intrest ${interest} </h5>`;
        message = message + `<h5>Total Payment = ${TotalAmount}</h5>`;

   let output = document.getElementById("output");
   output.innerHTML = message;
}



