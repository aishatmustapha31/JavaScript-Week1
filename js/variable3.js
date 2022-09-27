

var name1 ="James Bond";

var name2 ="Mary Jones";

var name3 = "Fred Marshal";


// console.log(`First User is ${name1}`);

// console.log(`Second User is ${name2}`);

// console.log(`Third User is ${name3}`);


//  Array   

var nameList = []

var names =[name1, name2,name3,"King James","Milly Rice",
name1, name2,name3,"King James","Milly Rice",
name1, name2,name3,"King James","Milly Rice",
name1, name2,name3,"King James","Milly Rice"]

var scores = [1,4,5,7,8,9,12,4,6,7,8,9]

// console.log(nameList)
// console.log(names)


console.log(scores)

var index = 10;

var mark = scores[index];
console.log( `Element at position ${index} = ${scores[index]}`)

//  scores.forEach();

// scores.forEach( function(val){

//     console.log(" Value = ",val);

// });

names.forEach(
    function(val){
      console.log("User name = ",val);    
    }
);