// What will console.log state when this function is called?

function myBirthdayYearFunc(){
    console.log("I was born in" + 1980);
}
//  didnt output anything


// So, if the variable birthYearInput is 1980 (aka var birthYearInput = 1980), and this function is called, what would the console.log state?

function myBirthdayYearFunc(birthYearInput){
    console.log("I was bornin in"+ birthYearInput);
}
// I was born in 1980

// Let's try it again. If var num1 = 10 and var num2 = 20, what would the console.log state?

function add(num1, num2){
    console.log("summing Numbers!");
    console.log("num1 is:" + num1);
    console.log("num2 is:"+ num2);
    var sum= num1 + num2;
    console.log(sum);
}
// // false
// 10 is 10
// 20 is 20
// 30