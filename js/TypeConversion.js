

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
    let age = document.getElementById("age");
    let gender = document.getElementById("gender");


    

    // console.log("FirstName = ", typeof firstName.value);
    // console.log("LastName = ", typeof lastName.value);
    // console.log("Reason ", typeof reason.value);
    // console.log("Amount ", typeof  amount.value);
    // console.log("Number of Months ", typeof numberOfMonths.value);

    let amountConverted=  Number(amount.value);

    // console.log("Converted Amount ", amountConverted, typeof amountConverted);

    let  monthsConverted = Number(numberOfMonths.value);

    let interest = amountConverted * 0.3 * monthsConverted; 

    let TotalAmount = amountConverted + interest; 

    let interestForFemale= amountConverted *0.15* monthsConverted;

    let Applicantage= age >=18
    let iscorrectgender= "female"
         iscorrectgender= "male"

    //Interest For Female${interestForFemale}


    let message = `<h4>Hello ${firstName.value} ${lastName.value}</h4>`;
        message = message + `<h5>Loan Amount: ${amountConverted}</h5>`;
        message = message + `<h5>Duration ${monthsConverted} Months</h5>`;
        if(iscorrectgender(female)){
            message= message +`<h5>Interest For Female${interestForFemale}
            </h5>`;
        }else{
            message= message + `<h5>Interest ${interest} </h5>`;
        }
        message = message + `<h5>Total Payment = ${TotalAmount}</h5>`;
        if(age >= 18){
            message= message + `<h5>Qualified Candidate</h5>`;
        }else{
            message= message + `<h5>Candidate Not Qualified</h5>`
        }
        
        

      

   let output = document.getElementById("output");
   output.innerHTML = message;

   

}

function addition(number1, number2){

    let answer = number1 + number2;

    console.log(answer);

}


addition(5,10);