var myName = " Mariana";
var YourName = prompt("What's your name?");
var firstChar = YourName.slice(0,1);
var upperCaseFirtChar = firstChar.toUpperCase();
var restOfYourName = YourName.slice(1,YourName.lenght);
restOfYourName = restOfYourName.toLowerCase();
var capitalisedYourName = upperCaseFirtChar + restOfYourName;

alert("My name is" + myName + ", welcome to my page " + capitalisedYourName + "!");