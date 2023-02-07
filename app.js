//chpt 01 (alert)
//(Que)Write a script to greet your website visitor using JS alert box?
//(Ans)alert("WELCOME TO OUR WEBSITE")
//(Que)2.Write a script to display following message on your web page?
//(Ans)alert("Error!Please enter a valid password")
//(Que)3.Write a script to display following message on your web page: (Hint : Use line break)
//(Ans)alert("Welcome to js world <br> Happy coding")
//(Que)5.Generate the following message through browser’s developer console:
//(Ans)console.log alert(Hello world... javascript)


//Chapt 02 (VARIABLES FOR	STRINGS)
//1. Declare a variable called username.
// var username;
// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var myName = Muhammad Ahmed
//3. Write a script to
// a. declare a JS variable, titled message
// b. assign “Hello World” to the variable message
// c. display the message in alert box 
//var message = "Hello World";
//alert(message);
//4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
// var name = "ahmed";
// var age = "17";
// alert(name,age)
//5. Write a script to display the following alert using one JS variable:
//var pize = "pizza <br> pizz <br> piz <br> pi <br> p"
//alert(pize)


//chpt 03 VARIABLES	FOR	NUMBERS
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
//var age = "I am 14 years old";
//alert(age)
// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
//var age = "You have visited this site 21 times";
//alert(age)
// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browse
//var birth = "my birth is 1990"
// document.write(birth)


// chp 4 VARIABLE NAMES:	LEGAL	&	ILLEGAL
//1. Declare 3 variables in one statement.
//var I,j,k;
//3. Display this in your browser
// a. A heading stating “Rules for naming JS variables”
// b. Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c. Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d. Variable names are case _________
// e. Variable names should not be JS _________

// a. A heading stating “Rules for naming JS variables”

// Chp 5 to 7 MATH	EXPRESSIONS
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var ali = 8;
// var ahmed = 9;
// var res = ( ali+ahmed)
// var to = "Sum of 8 and 9 is"
// alert(to+res)
//3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// var ret;
// prompt(ret)
// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets
// to a movie. Example output:
// var ticket = 600;
// var total = 5;
// var res = ticket*total;
// var ret = "total cost to buy five ticket is "
// alert(ret+res)
// 5. Write a script to display multiplication table of any number in
// your browser. E.g
// var l1 = 2;
// for (l1 <= 10 ) {
//     document.write 
// }

// Chapter 8 
// Question no 1
// var a = 10
// a++
// document.write(a)
// var b = 10
// ++b
// document.write(b)


// Question no 2
// var a = 2
// var b = 1
// var result = --a - --b + ++b + b--;
// document.write(result)

// Question no 3
// var greet = prompt("Hello Enter Your Name")
// alert("Have Great Day "+greet)

// Question 4
// var inp = +prompt("Enter Multiple Number")
// var mul=5*inp
// document.write(mul)

// Question 5
// var inp = +prompt("Enter Division Number")
// var div=5*inp
// document.write(div)

// Chapter 9 to 10
// Question no 1
// var cityName = prompt("Enter Your City")
// if(cityName=="Karachi"){
//     document.write("Welcome in city of light")
// }
// else{
//     document.write("Welcome ")
// }

// // Question no 2
// var gender = prompt("Enter Your Gender")
// if (gender == "Male") {
//     document.write("Welcome Sir ")
// }
// else {
//     document.write("Welcome Mam")
// }

// // Question no 3
// var trafficColors = prompt("Enter Your Gender")
// if (trafficColors == "Red") {
//     document.write("Stop")
// }
// else if(trafficColors=="Yellow"){
//     document.write("Ready")
// }
// else if(trafficColors=="Green"){
//     document.write("Go")
// }
// else {
//     document.write("Invalid color")
// }

// Question no 4
// var a = 4;
// if (++a === 5){
// document.write("given condition for variable a is true");
// }

// Question no 5
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Chapter 10 to 13
// Question no 1
// var num1=+prompt("Enter Number")
// var num2=+prompt("Enter Number")
// if(num1>num2){
//     document.write(num1+"is Greater than"+num2)
// }
// else if(num2>num1){
//     document.write(num2+"is Greater than"+num1)

// }
// else if(num2==num1){
//     document.write(num2+"is equal to"+num1)
// }
// else{
//     document.write("Invalid")
// }

// Question no 2
// var num1 = +prompt("Enter number")
// if(num1>0){
//         document.write("Positive Number")  
//     }
// else{
//     document.write("Negative Number")  

// }

// Question no 3
// var num1 = prompt("Enter Letter")
// if (num1 == "a") {
//     document.write("Vowel")
// }
// else if(num1 == "e"){
//     document.write("Vowel")
// }
// else if(num1 == "i"){
//     document.write("Vowel")
// }
// else if(num1 == "o"){
//     document.write("Vowel")
// }
// else if(num1 == "u"){
//     document.write("Vowel")
// }
// else {
//     document.write("Counsonant")

// }


// Question no 4
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }

// Question no 5
// var pass = "admin"
// var userInput = prompt("Enter Password")
// if(pass==userInput){
//     document.write("Correct Password")
// }
// else{
//     document.write("Incorrect Password")
// }
//--------------------------------- Chapter 14 to 17-----------------------------------------//
// Qusetion no 1
// var arr = []

// Qusetion no 2
// var arr = ["Meraj","Ali","Junaid","Wahaj","Kariz","Kamil"]


// Qusetion no 3
// var arr = [1,44,53,,56,78,56,45,3,34,75]


// Qusetion no 4
// var arr = [true, false]


// Qusetion no 5
// document.write("Qualification: </br>")
// var arr = ["1)SSC</br>", "2)SSC</br>", "3)SSC</br>", "4)SSC</br>", "5)SSC</br>", "6)SSC</br>"]
// var r=arr.join(" ")
// document.write(r)

// Qusetion no 6
// var arr = ["Ali", "Meraj", "Daniyal"]
// var arr2 = ["400", "299", "322"]
// var total = arr2[0] / 500 * 100
// var total2 = arr2[1] / 500 * 100
// var total3 = arr2[2] / 500 * 100
// document.write("Score of Ali is: " + arr2[0] + " Percentage is: " + total + "</br>")
// document.write("Score of Meraj is: " + arr2[1] + " Percentage is: " + total2 + "</br>")
// document.write("Score of Daniyal is: " + arr2[2] + " Percentage is: " + total3 + "</br>")


// Question no 7
// var arr = ["This", "is", "my", "cat"];
// var r = arr.join(" ")
// document.write(r)


// Question no 7
// var fruits = ["Strawbery", "Orange", "Apple", "Banana", "Watermelon"]
// var r = fruits.sort()
// document.write(r)


// Question no 8
// var compare = function(a,b){
//     return a-b;
// }
// var fruits = [122, 324, 565, 563, 343, 453, 232]
// var r = fruits.sort(compare)
// document.write(r)


