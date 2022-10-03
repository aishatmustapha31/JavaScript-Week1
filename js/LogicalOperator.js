

//  Logical OR   || 

let fuelLevel = 10;

let plugLevel = 42;

let isFuelLevelOk = fuelLevel > 30

let isPlugOk = plugLevel >= 10

console.log("IsFuelOk ",isFuelLevelOk);
console.log("IsPlugOk ",isPlugOk);

if( isFuelLevelOk ||  isPlugOk ){

    console.log("The Machine is Running ");

}else{
    console.log("Faulty Machine ")
}



//  Logical And   && 

let gender = "Female"
let age = 30
let experience =9








// console.log("IsCorrectGender ",isCorrentGender())
// console.log("IsQualifiedAge ",isQualifiedAge())
// console.log("IsCorrectExperience ",isCorrectExperience())

if( isCorrentGender() && isQualifiedAge() && isCorrectExperience()){
    console.log(" Qualified Candidate")
}else{
    console.log("UnQualified Candidate")
}

function isCorrentGender(){
    console.log("inside function isCorrentGender")
    let isCorrentGender =  gender === "Male"
    return isCorrentGender
}

function isQualifiedAge(){
    console.log("inside function isQualifiedAge")
    let isQualifiedAge  = age > 25
    return isQualifiedAge
}

function  isCorrectExperience(){
    console.log("inside function isCorrectExperience")
    let isCorrectExperience = experience >= 6
    return isCorrectExperience;
}





