//Part 1 - Math and Math Functions

//STEP 1
//var myNumber = prompt("Enter a number");
//window.console.log(Math.abs(myNumber));

//STEP 2
//var decimalNumber = prompt("Enter a floating point value");
//window.console.log(Math.ceil(decimalNumber));

//STEP 3
//var decimalNumber = prompt("Enter a floating point value");
//window.console.log(Math.floor(decimalNumber));

//STEP 4
//var myNumbers = prompt("Enter five numbers separated by a comma");
//var intNumbers = parseInt(myNumbers);
//window.console.log(Math.max(intNumbers));
//window.console.log(Math.min(intNumbers));

//STEP 5
//var number = prompt("Enter a number");
//window.console.log(Math.sqrt(number));


//Part 2 - Date and Date Functions 

//STEP 6
//var d = new Date();
//window.console.log(d.toDateString());

//STEP 7
//function daysInMonth(month, year) {
//return new Date(year, month, 0).getDate();}
//window.console.log(daysInMonth(7, 2017)); 

//STEP 8
//var date = new Date("02/21/2017");
//locale = "en-us";
//month = date.toLocaleString(locale, { month: "long" });
//window.console.log(month);

//STEP 9
//var is_weekend = function(date1){
//var dt = new Date(date1);
//if(dt.getDay() == 6 || dt.getDay() == 0){
//return "weekend";} }
//window.console.log(is_weekend('Feb 19, 2017'));

//STEP 10
//(function() {
//var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//Date.prototype.getDayName = function() {
//return days[ this.getDay()-1];
//};
//})();
//var now = new Date();
//var day = now.getDayName();
//window.console.log(day);

//STEP 11 
//(function() {
//var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//Date.prototype.getDayName = function() {
//return days[ this.getDay()];
//};
//})();
//var now = new Date();
//var day = now.getDayName();
//window.console.log(day.charAt(0));

//Part 3 - Conditional Logic and Looping Operations

//STEP 12
//var numberOne = prompt("Enter a number");
//var numberTwo = prompt("Enter another number");
//if (numberOne > numberTwo) { 
//window.console.log(numberOne);}

//STEP 13 
//var students = 

//function assignGrade(score) {
//if (score > 90) {
//return 'A';
//} else if (score > 80) {
//return 'B';
//} else if (score > 70) {
// return 'C';
//} else if (score > 60) {
//return 'D';
//} else {
// return 'F';}}

//STEP 14 
//for (var i = 0; i <= 15; i++) {
//if (i % 2 === 0) {
//console.log(i + ' is even');
//} else {
//window.console.log(i + ' is odd');}}

//STEP 15
//for (var i = 1; i <= 100; i++) {
//if( i % 3 && i % 5 ) {
//window.console.log("FizzBuzz");
//} else {
//if( i % 3 == 0 ) {
//window.console.log("Fizz");
//}
//if( i % 5 == 0 ) {
//window.console.log("Buzz");}}}


//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game

/* var firstQuestion = confirm("Are you ready to play the game?"); {
if (firstQuestion == true) {
alert("Awesome, our hero is waiting!");
} else {
alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");
}
}

alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var choice = prompt("Which direction would you like to head? (Please enter forward, left, or right)."); 
switch (choice) {
case "forward":
alert("You walk about 100 yards and safely make your way out of the cave");
break;
case "left":
alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
break;
case "right":
alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
break;
default:
alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser");
break;
}
var rate = prompt("Rate this game on a scale of 1 to 10"); {
if (rate > 6 && rate < 10) {
alert("Thank you, we will continue to make improvements to the game!");
} else if (rate > 1 && rate < 5) {
alert("Whatever, you weren’t very good at this game anyway!");}} */

//Part 5 - The “Coin Flip” Game

/* var coinFlip = Math.floor(Math.random() * 2); {
if (coinFlip == 1) {
alert("heads");
} else {
alert("tails");
}
}

var choice = prompt("Heads or Tails?"); {
if (coinFlip == 1 && choice == "heads") {
alert ("The flip was heads and you chose heads...you win!");
} else if (coinFlip == 1 && choice == "tails") {
alert ("The flip was heads but you chose tails...you lose!");
} else if (coinFlip == "tails" && choice == "heads") {
alert ("The flip was tails but you chose heads...you lose!");
} else if (coinFlip == "tails" && choice == "tails") {
alert("The flip was tails and you chose tails...you win!");
}
} */


//Part 6 - The “Coin Flip” Game Redux 
/*var coinFlip = Math.floor(Math.random() * 2);
for (coinFlip = 0; coinFlip <= 10; coinFlip++) {
if (coinFlip == 0) {
alert ("Heads");
} else {
alert("Tails");
}
}*/

//Part 7 - The “Coin Flip Streak” Game 


//Part 8 – Looping a Triangle 

/*for ( var row = 1; row <= 7; ++row )
{
document.writeln( "<br />" );

for ( var column = 1; column <= row; ++column )
{

document.write( "# " );

}
}*/

//Part 9 – Odd or Even
/*for (var i = 0; i <= 15 ; i++) {
if (i % 2 === 0) {
window.console.log(i + " is even");
} else {
window.console.log(i + " is odd");
}
}*/