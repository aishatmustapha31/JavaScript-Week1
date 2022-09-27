

var output = document.getElementById("output");

output.textContent = "Hello Javascript"

output.textContent = new Date();

// alert("This is an alert");

// window.alert("Second Alert");

//   var _name = window.prompt("What is your name?");

//   output.textContent = "Your name is "+ _name


  var result = window.confirm("Are you sure you want to close the window?");

  console.log(result);

  if(result == true ){
    output.textContent ="The window was closed!"
  }
  else{
    output.textContent= "Window close aborted!!"
  }