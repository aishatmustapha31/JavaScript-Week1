

let _name = "";
let _salary = 0.0;
let message = "";

let output = document.getElementById("output");

_name = prompt("What is your name?");
_salary = prompt("What is your Salary?");

if(isNaN(_salary)===true){
    message = `<h5>Invalid Salary Value , Please enter a correct value!</h5>`;
}else{

    message =  message +  `<h5>Employee Name: ${_name}</h5>`;

    message =  message + `<hr> <h5>Salary: ${_salary}</h5>`;
  
    let tax = _salary * 0.0564;
    let netSalary = _salary - tax;
  
    message = message + `<h5>Tax: ${tax}</h5>`;
    message = message + `<h5>Net Salary: ${netSalary}</h5>`;

}



output.innerHTML = message;