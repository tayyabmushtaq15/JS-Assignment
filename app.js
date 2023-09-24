//Chapter 1 Alerts
/* Question 1
var firstName = "Tayyab";
var lastName = "Mushtaq";
var email = "tayyabmushtaq15@gmail.com";
var phoneNumber = "+923358855594";
alert("First Name:" + firstName + "\n" + "Last Name :" + lastName + "\n" + "Email: " + email + "\n" + "Phone Number: " + phoneNumber); 
*/

/*Question 2 correct the statement alert"You are learning javascript!"; 
alert("You are learning Javascript!");
*/

/*Question 3 Code an alert statement display any message you like 
alert("I am learning Metaverse by Jawan Pakistan");
*/

/*Chapter 2 Variable for string */
/*
//1. 
var firstName = "Tayyab" 
//2.
var myVariable ;
myVariable = "Hello World !";
//3.
var teamName = "Team Jawan Pakistan";
alert("Our team is: " + teamName);
//4.
var bestMan = "Charlie";
bestMan = "Ali";
*/
/*Chapter 3 (Variables for numbers) 
//1.
var caseQty;
//2.
caseQty = 144;
//3.
var num = 9;
//4.
var result ;
result = 5+5;
//5.
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
//orderTotal value is 110
//6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.
var number1 = 10;
number1 = number1 + 5;
*/
// Chapter 4 (Variable names Legal and Illegal)
/*
//1. Correct this statement. var product cost = 3.45;
var productCost = 3.45;
//2. Rewrite this using camelCase. var Nameofband;
var nameOfBand;
//3. In a single statement declare a legally-named variable and assign a number to it.
var itemCost = 10.12;
//4. Declare a variable that is a combination of your first and last names. Use camelCase
var fullName = "Tayyab Mushtaq";
//5. List the Leggal and Illegal Variable
//Legal Variable are listed bellow
var myVariable;
var _privateVariable;
var $price;
var user123;
var camelCaseVariable;
//illegal variable are listed bellow
var 123variable;
var my-variable;
var my variable;
var var;
*/
//Chapter 5 (Math Expression I)
/*
//1.What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
var remainder = 100 % 10;
//2.	What is the value of num? var num = 20 % 6;
    // the remainder value is 2
//3.	In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.
    var largeNum = 1000 * 2000;
//4.	Assign to a variable the value represented by one variable subtracted from the value represented by another variable
    var num1 = 10;
    var num2 = 2;
    var result = num1 / num2;
//5.	Assign to a variable the remainder when one number is divided by another. The variable hasn't been declared beforehand. Make up the variable name.
    var dividend = 20;
    var divisor = 6;
    var remainderResult = dividend % divisor;
//6.	Code an alert that displays the result of a multiplication on 2 numbers.
    var numb1 = 2;
    var numb2 = 3;
    result = numb1 * numb2;
    alert(result);
 */
//Chapter 6 (Math Expression II)
/**
 //1. Code a short form of x = x + 1; Use either of the two legal expressions.
    x++
//2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
    x--
//3. var x = 50; var y = x++; What is the value of y?
// the value of y will be 50 
//4. var y = 50; var z = --y; What is the value of z?
// the value of z is 49
//5. In a single statement, decrement num and assign its original value to newNum.
    var newNum = num--;
//6. In a single statement add 1 to a variable and assign its original value to another variable.
var value1 = 50;
var newValue = value1++;
//7. Assign a number value to a variable.  Increment the variable. Display the new value in an alert
 var myValue = 1994;
 myValue++;
 alert("The New Value is :" + myValue)
 */
//Chapter 7 (Math Expression III)
/*
//1. var calculatedNum = 2 + (2 * 6); What is the value of calculatedNum?
calculatedNum = 14
//2. var calculatedNum = (2 + 2) * 6; What is the value of calculatedNum?
calculatedNum = 24
//3. var calculatedNum = (2 + 2) * (4 + 2); What is the value of calculatedNum?
calculatedNum = 24
//4. var calculatedNum = ((2 + 2) * 4) + 2; What is the value of calculatedNum?
calculatedNum = 18
//5.Write a statement that assigns to cost the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 56.
var cost = (2+2)*(4+10);
//6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10, clarified with parentheses, producing 20.
var units = 2 + (2*4) + 10;
//7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.
var pressure = 4 / (2 * 5);
*/
//Chapter 8 (Concatenating Text Strings)
/*
1.	var num = "2" + "2";
What is the value of num? Include quotation marks.
The value of num is 22
2.	message = ("Hello," + "Dolly");
What is the value of message? (Include the quotation marks.)
the value of message is Hello,Dolly
Alert the statement
3.	alert("33" + 3);
What message displays in the alert box?
message = 333
4.	Write an alert that displays the concatenation of the two parts of "Pakistan Zindabad".
alert("Pakistan " +"Zindabad");
5.	Write a statement that assigns to a variable the concatenation of a string with a number.
var item = "itemName" + 30;
6.	Assign strings to two variables. Then concatenate them and assign the result to a third variable.
var firstName = "Tayyab";
var lastName = "Mushtaq";
var fullName = firstName + " " + lastName;
console.log(fullName);
*/
//Chapter 9 (Prompts)
/* 1.Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
        var firstName = prompt("Please Enter your First Name");
    2.	Code a prompt with the message "Country?" and the default answer "China". The user's response is assigned to country.
        var country = prompt("Country?", "China");
    3.	Correct this statement var yourName = prompt(Enter Your Name");
        var yourName = prompt("Enter your Name");
    4.	Code a prompt that specifies a string as the message Include a default input.
        var userInput = prompt("Please enter your name:", "Tayyab Mushtaq");
    5.	Assign strings to two variables. Code a prompt specifying the first variable as the message and the second variable as the default response. Assign the user's response to a third variable.
    var message = "Please Enter Your Name";
    var defaultResponse = "Tayyab Mushtaq";
    result = prompt(message , defaultResponse);
    6.	Display a prompt, including both a message and a default response.Display the user's response in an alert.
    var message = "Please enter your age:";
    var defaultResponse = "30";
    var userResponse = prompt(message, defaultResponse);

    if (userResponse !== null) {
    alert("You entered: " + userResponse);
    } else {
    alert("You didn't enter anything.");
    }
    */
//Chapter 10 (if statments)
/*
1.	var city = "Karachi"
if (city = "Karachi") {
console.log("The City OF Lights")
Correct the above statement:
var city = "Karachi";
if (city = "Karachi") {
console.log("The City OF Lights");
}
Also try this statement by yourself
2.	This is the first line of an if statement:
if (x === y) {
Complete the statement. If the condition is true, display a box that asks the user value of z? and assign it to another variable.
if (x===y){
    prompt("Please enter value of z");
}
3.	Code an if statement that tests if ZipCode is "10010" so, Alert that "Karachi". if not then alert ("Please write correct city")
    var zipCode = prompt("Please enter zipcode");
    if (zipCode == 10010){
        alert("Karachi");
    }else{
        alert("Please write correct city");
    }
4.	Code an if statement. Test whether a variable has a particular numerical value. If so, assign a new value to that variable, as in x = 1;
var x = 5;
if (x===5){
    x=1;
}
 */
/*
Chapter 11 (Comparison Operators)
1.	Code the first line of an if statement that tests whether one variable is unequal to another. (Use !)
    var variable1 = 15;
    var variable2 = 10;
    if(variable1 !== variable2){
        alert("You entered an incorrect value")
    }
2.	Code the first line of an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable.
    if(variable1 >= variable2){

    }
3.	Code an if statement. Test whether a variable is unequal to a particular number. If so, assign a number to that variable.
    var assignvariable = 15;
    if(assignvariable !== 10){
        assignvariable = 9;
    }
4.	Code an if statement that tests whether a number is unequal to a different number. If the condition is true (it will be), display a congratulations alert.
var number1 = 10;
var number2 = 5;
if (number1 !== number2) {
  alert("Congratulations!");
}
5.Code a prompt asking for your first name. Code an if statement that tests whether the name you entered is unequal to another name.
If the condition is true (it will be), display an alert that says "No match"

    var enterName = prompt("Please enter your first name:");
    var expectedName = "John"; // Change "John" to the name you want to compare with

    if (enterName !== expectedName) {
    alert("No match");
    }
 */

/*
Chapter 12 (if…else and else if statements)
1.	Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.
    var variable1 = 10;
    var variable2 = 5;

    if (variable1 >= variable2) {
    alert("Value represented by variable1 is greater than or equal to variable2");
    } else {
    alert("Value represented by variable1 is less than variable2");
    }

2.	Write a program using if else and else if statement which take marks from user. And the program will calculate your percentage and  give you grade A/C to Your percentage. (MARKSHEET)
        var subject1 = parseFloat(prompt("Enter marks for subject 1:"));
        var subject2 = parseFloat(prompt("Enter marks for subject 2:"));
        var subject3 = parseFloat(prompt("Enter marks for subject 3:"));
        var totalMarks = subject1 + subject2 + subject3;
        var percentage = (totalMarks / 300) * 100;
        var grade ;
        if (percentage >= 90){
            grade ="A+";
        }else if(percentage >= 80){
            grade ="A";
        }else if(percentage >= 70){
            grade ="B";
        }else if(percentage >= 60){
            grade ="C";
        }else if(percentage >= 50){
            grade ="D";
        }else{
            grade ="F"
        }
        alert("Total Marks: " + totalMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: "+ grade);
3.	This is the if statement that begins the code.
if (a === 10) {
  alert("a is 10");
}
If a isn't 10, display an alert that says The correct value of a is ____
Note: Try this by yourself

    if(a===10){
        alert("a is 10");
    }else{
        alert("the correct value of a is ----");
    }
4.	Prompt the user to enter a city.
If the city is Karachi, display an alert acknowledging it is Karachi.
If not, check to see if it's Lahore.
If it is, display an alert acknowledging it's Lahore.
Otherwise, display a different alert.
var city = prompt("Enter a city:");

    if (city === "Karachi") {
        alert("It is Karachi.");
    }else if (city === "Lahore") {
        alert("It's Lahore.");
    }else {
        alert("Please enter valid city");
    }
*/
/*
Chapter 13 (Testing sets of conditions)
1.	Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.
        if(a===b && b==d){
            alert("You enter correct information")
        }
2.	Code the first line of an if statement that tests whether either or both are true: a has the same value as b or c doesn't have the same value as d.
        if (a===b || c !== d){
            alert("message");
        }
3.	Code the first line of an if statement that tests whether 
I.	name is either "Hamza" or "Arsalan".
II.	age is Less than 60.
        if ((name === "Hamza" || name === "Arsalan") && age < 60) {
         alert("Message")
        }

4.	Declare two variables and assign them number values.
If the first variable is less than the second variable or greater than the second variable, display an alert.
            var firstNumber = 10;
            var secondNumber = 20;
            if (firstNumber < secondNumber || firstNumber > secondNumber) {
                alert("The first number is either less than or greater than the second number.");
            } else {
                alert("The first number is equal to the second number.");
            }
5.	Declare 2 variables. Assign one of them your first name and the other one your last name.
Code 2 prompts, asking for your first and your last name.
If your answers match the two variables, display an alert.
        var firstName = "Tayyab"; 
        var lastName = "Mushtaq"; 
        var userFirstName = prompt("Please enter your first name:");
        var userLastName = prompt("Please enter your last name:");
            if (userFirstName === firstName && userLastName === lastName) {
                alert("Your first name and last name match.");
            } else {
                alert("Your first name and last name do not match.");
            }

 */

/**
 Chapter 14 (If statements nested)
1.	Code an if statement enclosing a nested if. If password is not empty, then check if password is not greater than 5  , then display an alert that says "Password must be greater than 5" if greater than 5 then Alert "OK".
            var password = prompt("Enter your password:");

            if (password !== "") {
                if (password.length <= 5) {
                    alert("Password must be greater than 5 characters.");
                } else {
                    alert("OK");
                }
            } else {
                alert("Password cannot be empty.");
            }
2.	Try this statement by yourself
if (a === 1) {
 if (c === "Max") {
    alert("OK");
  }
}
    alert will only display when a is equal to 1 and c is equal to max
3.	Code the first line of an if statement that avoids the nesting above by testing for multiple conditions.
if (a === 1) {
  if (c === "Max") {
 alert("OK");
  }
}
solution is;

        if (a === 1 && c === "Max") {
            alert("OK");
            }

4.	Declare two variables and assign them the same number value.
Test two conditions, using nested if statements. Test whether the first variable equals the second variable and also whether it is less than or equal to the second variable. If the test passes—and it will—display an alert message.
            var firstNumber = 5;
            var secondNumber = 5;

            if (firstNumber === secondNumber) {
                if (firstNumber <= secondNumber) {
            alert("Both conditions are true: First number equals second number and is less than or equal to the second number.");
                }
            }

 */

/**
 *  Chapter 15 (Array I)
1.	Declare an empty array.
            var newArry = [] ;
2.	Code an array with 1 string element
            var newArry = ["Tayyab"];
3.	var alphabet = ["h","i","j","k"]. Now print the letter “j” in alert using array index.
                alert(alphabet[2]);
4.	var alphabet=["h","i","j","k", “l”,”m”, “n”, “o”]. Find the total length of array.
            var lengthOfArray = alphabet.length;
            console.log(lengthOfArray);
5.	Declare an array with one element and Add a second element with index in array. Create an alert whose message is the new element.
        var myArray=["Tayyab"];
        myArray[1]="Arslan";
        alert(myArray[1]);
Chapter 16 (Array II)
1.	Code an array with 1 string element.
Add an additional element to the array using push.
Create an alert whose message is the last element.
    var myArray = ["Tayyab"];
    myArray.push("Arslan");
    var lastElement = myArray[myArray.length -1];
    alert(lastElement)
2.	var Alphabet=["h","i","j","k"]
Remove the last element from the array Alphabet.
            Alphabet.pop();
            console.log(Alphabet);
3.	var Alphabet=["h","i","j","k"]
Add a new element, a number, to the end of an array.
      Alphabet.push("l");
      console.log(Alphabet);
Chapter 16 (Array III)
1.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Remove the first element of an array.
            sizes.shift();
            console.log(sizes);

2.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Add three number elements to the beginning of an array.
            sizes.unshift(1,2,3);
            console.log(sizes);
3.	Declare an array with one element.
Add a second element to the beginning of the array.
Create an alert whose message is the new first element.
        var myArray = ["Arslan"];
            myArray.unshift("Tayyab");
            var newFirstElement=myArray[0];
            alert(newFirstElement);
4.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Insert "L" into the array between "M" and "XL".
            sizes.splice(2,0, "L");
            console.log(sizes);
5.	var sizes = ["S", "M", "XL", "XXL", "XXXL"].
Copy the first 3 sizes of the array and put them into a new array, regSizes.
            var regSizes= sizes.slice(0,3);
            console.log(regSizes);

6.	var pets = ["dog", "cat", "ox", "duck", "frog"].
Add 2 elements after "dog" and remove "cat", "ox", and "duck".
            pets.splice(2, 0, "parrot", "rabbit");
            pets.splice(1, 3);
            console.log(pets);
7.	var pets = ["dog", "cat", "ox", "duck", "frog"];
Remove "cat" and "ox".
                pets.splice(1,2);
                console.log(pets);
8.	var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
Reduce it to "duck" and "frog" using slice.
            var reducedPets = pets.slice(3,5);
            console.log(reducedPets);
 */
/**
 * Chapter 17 - 20 (for Loops)
1.	Write a statement in which loop is to run 10 times.
            for(var i=0; i<=0; i++){
                console.log("This loop has run " + (i + 1) + " times.");     
            }
2.	Code the first line of a for loop with the usual counter name, usual starting value, and usual increment. Run it 12 times using <= to specify how many loops.
            for (var i = 0; i <= 11; i++) {

            }
3.	What are the 5 characters missing from this code, excluding any spaces that are missing? Type them in order, with no spaces or commas between them.
for var i = 0 i <= 4 i++
        for(var i=0; i <= 4; i++){

        }
Note: Complete this statement by yourself
4.	Code the first line of a for loop with a counter name that's not i. Code the usual starting value and usual increment. Run it 100 times using < to specify how many loops.
        for(var count = 0; count < 100; count++){

        }
5.	Code the first line of a for loop with the usual counter and the usual starting value. Run it 3 times using > to specify how many loops. Decrement it with each iteration.
        for(var i = 3; i > 0; i--){

        }
6.	The statement assigns the number of elements in the array to the variable.
            var myArray = [1,2,3,4,5,6];
            var numberOfElements = myArray.length;
            console.log(numberOfElement);
7.	Set a variable named “flag” with an initial Boolean value of your choice.
            var flag = true;
8.	Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array pets.
            for(var i = 0; i <= pets.length; i++){

            }
9.	Coding Exercise:
Set a for loop to run 10 iterations.
On the second iteration, display the counter in an alert. (It should be 1.)
Break out of the loop.
            for(var i = 0; i <=10; i++){
                for(i==1){
                    alert("The Counter is " + i );
                    break;
                }
            }
10.	Create an array which contains user names
Code a prompt with the message "Enter first name". The user's response is assigned to firstName.
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array user names.
Code an if statement that tests the presense of (user name) in an array.
If user name match Alert that "Enter". if not then alert ("Please write correct user name").
            var userNames = ["Tayyab","Ali","Hamza","Arslan","Bilal"];
            var firstName = prompt("Please Enter your First Name");
            for(var i = 0; i < userNames.length; i++){
                if(firstName == userNames[i]){
                    alert("Welcome, " + firstName);
                    break;
                }
            }
            if(i=== userNames.length){
                alert("Please write correct user name");
            }
11.	Complete this code to display an alert if a match isn't found.
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
};

            var matchFound = false;
            for (var i = 0; i < list.length; i++) {
            if (userInput === list[i]) {
                alert("Match found");
                matchFound = true;
                break;
            }
            }

            if (!matchFound) {
                alert("Match not found");
            }
12.	var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”];
var secondArr = [1, 2, 3, 4, 5, 6];
Code the first line of a for loop with the usual counter, the usual starting value, and the usual incrementing. Limit the number of loops by the number of elements in the array firstArr.
In the scope of main loop Code the nested loop. Limit the number of nested loops by the number of elements in the array secondArr.
After that concatenate the both loops.
Expected Output:
a1
a2
a3
a4

f6
  
            var firstArr = ["a", "b", "c", "d", "e", "f"];
            var secondArr = [1, 2, 3, 4, 5, 6];

                for (var i = 0; i < firstArr.length; i++) {
                    for (var j = 0; j < secondArr.length; j++) {
                        console.log(firstArr[i] + secondArr[j]);
                    }
                }

*/

/**
 Chapter 21 (Changing Case)
1.	Type the characters that are missing from this code.
var allLower = userInput.toLowerCase;
Note: Correct this statement by yourself.
                var allLower = userInput.toLowerCase();
2.	Convert the string represented by x to lower-case and assign the result to the same variable.
                var x = x.toLowerCase();
3.	Convert the string represented by y to upper-case and assign the result to the same variable.
                var y = y.toUpperCase();
4.	Convert the string represented by a variable to lower-case and assign the result to a second variable that hasn't been declared beforehand.
                var orignalString = "Tayyab Mushtaq";
                var lowerCaseString = orignalString.toLowerCase();
5.	Convert the string represented by an array element to lower-case and assign it to a variable that hasn't been declared beforehand.
                var myArray = ["Hello World!"];
                var lowerCaseString = myArray[0].toLowerCase();
6.	Display in an alert the upper-case version of the string represented by a variable.
                var userName = "Tayyab Mushtaq";
                var upperCaseString = userName.toUpperCase();
                alert(upperCaseString);
7.	var cityName = “kaRacHi”;
Convert the string represented by a cityName in Capitalisation is the writing of a word with its first letter in uppercase and the remaining letters in lowercase.
                var cityName = "kaRacHi";
                var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
                console.log(capitalizedCityName);
 */
/**
 Chapter 22 - 25 (Strings)
1.	"captain" has been assigned to variable “sameWords”. You want to slice "ap" out of it.
                var sameWords = "captain";
                var result = sameWords.slice(1,3);
                console.log(result);
2.	The number of characters in the string will be assigned to the variable.
                var sameWords = "captain";
                var result = sameWords.length;
                console.log(result);                
3.	The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.
                var animal = "elephant";
                var seg = animal.slice(1,5);
                console.log(seg);
4.	Find the number of characters in the string represented by a variable and assign the number to a second variable.
                var sameWords = "captain";
                var result = sameWords.length;
                console.log(result);
5.	In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.
                var myString = "Tayyab Mushtaq";
                var numberOfCharacters = myString.length;
                var slicedString = myString.slice(1, -3);
                console.log(numberOfCharacters);
                console.log(slicedString);

6.	var text = "To be or not to be.";
var indx = text.indexOf("be");
What is the value of indx?
        In this case, the value of indx will be 3 because the first occurrence of "be" starts at the 4th character position in the string "To be or not to be." JavaScript uses a zero-based index, so the position of the "b" in "be" is at index 3.
7.	var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
What is the value of indx?
        In this case, the value of indx will be 16 because the last occurrence of "be" starts at the 17th character position in the string "To be or not to be." JavaScript uses a zero-based index, so the position of the "b" in "be" is at index 16.
Note: Try the above both examples by yourself.
8.	Find the index of the first character of the last instance of "go" in the string represented by the variable text and assign the number to the variable indx, which hasn't been declared beforehand.
        var text = "Let's go to the beach and then go hiking in the forest.";
        var indx = text.lastIndexOf("go");
        console.log(indx);
9.	Code the first line of an if statement that tests whether a segment with an index represented by indexNum exists in a string.
                if (indexNum >= 0 && indexNum < yourString.length) {
                
                }else {

                }
10.	In this string "abcde", what character is at index 2? (Use charAt)
                var myString = "abcde";
                var characterAtIndex2 = myString.charAt(2);
                console.log(characterAtIndex2);
11.	Find the 10th character in the string represented by text and assign it to the variable cha, which hasn't been declared beforehand.
                var myString = "Tayyab Mushtaq";
                var char    = myString.charAt(9);
                console.log(char)
12.	Find the last character in the string represented by str and assign it to x, which hasn't been declared beforehand.
                var str = "Tayyab Mushtaq";
                var x = str.charAt(str.length -1);
                console.log(x);
13.	Find the the 5th character in a string represented by input and assign it to cha, which hasn't been declared beforehand.
                var input = "Tayyab Mushtaq";
                var cha = input.charAt(4);
                console.log(cha);
14.	Code the first line of an if statement that tests whether the 3rd character of a string represented by a variable is a particular character.
                    if (yourString.length >= 3 && yourString.charAt(2) === 'yourCharacter') {
                    
                    }else{

                    }
15.	Code a for loop that cycles through all the characters of a string represented by a variable and assigns each character to an element of an array that has been declared beforehand.
In the string represented by reply replace the first instance of "no" with "yes" and assign the revised string to revisedReply, which hasn't been declared beforehand.
        var reply = "Replace no with yes, but not this no.";
        var charArray = [];
        for (var i = 0; i < reply.length; i++) {
            charArray.push(reply.charAt(i));
        }
            var revisedReply = reply.replace("no", "yes");
            console.log(charArray);
            console.log(revisedReply);
16.	In a string represented by str replace the first instance of "1" with "one" and assign the revised string to newStr, which hasn't been declared beforehand.
            var str = "This is 1 example with the number 1 in it.";
            var newStr = str.replace("1", "one");
            console.log(newStr);
17.	If you want all instances replaced, enter 3 characters that need to appear in this statement.
var y = x.replace("a", "z");
            var y = x.replace(/a/g,"z");
 */
/*
 Chapter 26 (Rounding Numbers)
1.	Form a statement that rounds a number to the nearest integer.
        var roundNumber = Math.round(x);    
2.	Round up a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
        var origNum = 4.5;
        var roundNum = Math.ceil(orignum);
        console.log(roundNum);
3.	Round down a number represented by origNum and assign it to roundNum, which hasn't been declared beforehand.
        var origNum = 4.9;
        var roundNum = Math.floor(orignum);
        console.log(roundNum);
4.	Round a number represented by a variable and assign the result to a second variable that hasn't been declared beforehand.
        var origNum = 7.8
        var roundNum = Math.round(origNum);
        console.log(roundNum);
5.	Round .5 to 0 and assign it to a variable that hasn't been declared beforehand.
        var origNum = 0.5;
        var roundNum = Math.floor(origNum);
        console.log(roundNum);
 */
/**
 Chapter 27 (Random Numbers)
1.	Convert a random number generated by JavaScript to a number in the range 1 to 50
        var randomNumber = Math.random();
        var min = 1;
        var max = 50;
        var scaleNum = Math.floor(randomNumber *(max - min + 1)) + min;
        console.log(scaleNum);
2.	Generate a random number and assign it to a variable that hasn't been declared beforehand.
            var randomNumber = Math.random();
            console.log(randomNumber);
3.	You have to create a dice in JavaScript with the use of pseudo-random number.
            document.addEventListener("DOMContentLoaded", function () {
                function rollDice() {
                            return Math.floor(Math.random() * 6) + 1;
                }
            document.getElementById("rollButton").addEventListener("click", function () {
                        var diceResult = rollDice();
            document.getElementById("result").textContent = "Result: " + diceResult;
                    });
                  });

4.	You have to create a toss (head/tail) in JavaScript with the use of pseudo-random number.
                document.addEventListener("DOMContentLoaded", function () {
                    function tossCoin() {
                        var randomNumber = Math.random();
                        return randomNumber < 0.5 ? "Heads" : "Tails";
                                    }
                document.getElementById("tossButton").addEventListener("click", function () {
                    var coinResult = tossCoin();
                document.getElementById("result").textContent = "Result: " + coinResult;
                });
            });
 */
/**
 Chapter 28, 29 (Converting Strings)
1.	How do you convert a string to an integer in JavaScript?
            var stringNumber = "123";
            var integerNumber = parseInt(stringNumber);
                console.log(integerNumber);
2.	Write a JavaScript function to convert the string "123" to an integer.
            var stringNumber = "123";
            var integerNumber = parseInt(stringNumber);
                console.log(integerNumber);
3.	How can you convert a string containing a decimal number to a floating-point number in JavaScript?
            var stringNumber = "123.45";
            var floatNumber = parseFloat(stringNumber);
                console.log(floatNumber);
4.	How can you check if a string can be successfully converted to an integer or decimal in JavaScript before performing the conversion?
            function isNumeric(value) {
              return !isNaN(value) && isFinite(value);
            }
            var stringNumber = "123";
            var stringDecimal = "123.45";
            var integerNumber = parseInt(stringNumber, 10);
            var floatNumber = parseFloat(stringDecimal);
                if(isNumeric(integerNumber)) {
                    console.log("Valid integer:", integerNumber);
                }else {
                    console.log("Invalid integer");
                }
                if(isNumeric(floatNumber)) {
                    console.log("Valid float:", floatNumber);
                }else {
                    console.log("Invalid float");
                }
5.	How can you convert a number to a string in JavaScript?
                    var number = 123;
                    var stringNumber = number.toString();
                    console.log(stringNumber);
6.	Write a JavaScript function to convert the number 42 to a string.
                    function numberToString() {
                    var number = 42;
                    var stringNumber = number.toString();
                    return stringNumber;
                    }
                    var result = numberToString();
                    console.log(result);
7.	Can you convert a string representing a decimal number (e.g., "3.14") to an integer in JavaScript? If so, how?
                    var decimalString = "3.14";
                    var integerNumber = parseInt(decimalString, 10);
                    console.log(integerNumber); 
Chapter 30 (Controlling the length of decimals)
1.	Code a statement that rounds a number represented by num to 4 places, converts it to a string, and assigns it to newNum, which hasn't been declared beforehand.
                        var num = 2.13432234;
                        var newNum = num.toFixed(4);
                        console.log(newNum)
2.	In a single statement round a number represented by a variable to 2 places, convert it to a string, convert it back to a number, and assign it to the same variable.
                        var num = 2.13432234;
                        num = parseFloat(num.toFixed(2));
                        console.log(num);
3.	Code the first line of an if statement that tests whether the number represented by num, rounded to 2 digits and converted to a string, has more than 4 characters in it.
                    if (num.toFixed(2).toString().length > 4) {
                    }else{

                    }
4.	Assign a number with many decimal places to a variable.
Code an alert that displays the number rounded to 2 decimal places and converted to a string.
                        var orignalNumber = 2.323433;
                        var roundedString = originalNumber.toFixed(2);
                        alert(roundedString);
Chapter 31 - 34 (Date & Time)
1.	Code a statement that creates a new Date object and assigns it to dObj, which hasn't been declared beforehand.
            var dObj = new Date();                    
2.	Code a statement that creates a new Date object, converts it to a string, and assigns the string to dStr, which hasn't been declared beforehand.
                    var dStr = new Date().toString();
3.	Code a statement that extracts the day of the week from a Date object represented by d and assigns it to day, which hasn't been declared beforehand.
                    var d = new Date();
                    var day = d.toLocaleString("en-US", { weekday: "long" });

4.	The day has been extracted from the Date object and assigned to d. The names of the days of the week have been assigned to the array dayNames. Alert the current day with array index.
                    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    var d = new Date();
                    var dayIndex = d.getDay();
                    var currentDay = dayNames[dayIndex];
                    alert(currentDay);
5.	Extract all parts of the Date and Time and assign it to the variable which has not been declared beforehand.
                    const currentDateTime = new Date();
                    const { year, month, day, hours, minutes, seconds, milliseconds } = currentDateTime;
                    console.log(`Year: ${year}`);
                    console.log(`Month: ${month}`);
                    console.log(`Day: ${day}`);
                    console.log(`Hours: ${hours}`);
                    console.log(`Minutes: ${minutes}`);
                    console.log(`Seconds: ${seconds}`);
                    console.log(`Milliseconds: ${milliseconds}`);
6.	Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to later, which hasn't been declared beforehand.
                    const later = new Date(2020, 11, 31);
7.	Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.
                    const myDate = new Date(1992, 1, 2);
8.	Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.
                    alert(new Date('1980-01-01T00:00:00.000Z').getTime());
9.	How do you change the year of a date in JavaScript?
                    const originalDate = new Date('2022-09-19'); 
                    originalDate.setFullYear(2023);
                    console.log(orignalDate);
10.	Write a JavaScript function to change the month of a given date to January.
                    funstion changeMonthToJanuary(inputDate){
                        const modifiedDate = new Date(inputDate);
                        modifiedDate.setMonth(0);
                        return modifiedDate;
                    }
                    const orignalDate = newDate('2022-09-19') 
                    const newDate = changeMonthToJanuary(orignalDate);
                    console.log(newDate);
11.	What is the method to change the day of the week for a specific date in JavaScript?
                    function getDateForDayOfWeek(year, month, desiredDayOfWeek) {
                          if (desiredDayOfWeek < 0 || desiredDayOfWeek > 6) {
                    throw new Error('Invalid day of the week. Use values from 0 (Sunday) to 6 (Saturday).');
                            }
                              const firstDayOfMonth = new Date(year, month, 1);
                              const dayDifference = desiredDayOfWeek - firstDayOfMonth.getDay();
                              const desiredDate = new Date(year, month, 1 + dayDifference);
                              return desiredDate;
                        }
                        const desiredDate = getDateForDayOfWeek(2023, 9, 0);
                        console.log(desiredDate);
12.	Write a JavaScript function to change the minutes of a given time to a specific value. (Value by prompt)
                        function changeMinutesInTime(inputTime) {
                              const timeComponents = inputTime.split(':');
                              if (timeComponents.length !== 2) {
                    throw new Error('Invalid time format. Please use HH:MM.');
                              }
                                    const hours = parseInt(timeComponents[0]);
                                    const minutes = parseInt(timeComponents[1]);
                                const newMinutes = prompt('Enter the new minutes value:');
                                const newMinutesInt = parseInt(newMinutes);
                                if (isNaN(newMinutesInt) || newMinutesInt < 0 || newMinutesInt > 59) {
                    throw new Error('Invalid minutes value. Please enter a number between 0 and 59.');
                                }
                                  const adjustedTime = new Date(0, 0, 0, hours, newMinutesInt);
                                  const adjustedTimeFormatted = adjustedTime.getHours().toString().padStart(2, '0') + ':' + adjustedTime.getMinutes().toString().padStart(2, '0');
                                  return adjustedTimeFormatted;
                            }
                            const inputTime = prompt('Enter the time (HH:MM):');
                            try {
                              const adjustedTime = changeMinutesInTime(inputTime);
                                    console.log(`Adjusted time: ${adjustedTime}`);
                                } catch (error) {
                                    console.error(error.message);
                                }
13.	Write a JavaScript function to add a specific number of hours to a given time.
                        function addHoursToTime(inputTime, hoursToAdd) {
                        
                        const timeComponents = inputTime.split(':');
                        if (timeComponents.length !== 2) {
                            throw new Error('Invalid time format. Please use HH:MM.');
                        }

                        const hours = parseInt(timeComponents[0]);
                        const minutes = parseInt(timeComponents[1]);

                        
                        if (isNaN(hoursToAdd) || hoursToAdd < 0) {
                            throw new Error('Invalid hoursToAdd value. Please enter a non-negative number.');
                        }

                        
                        const newHours = hours + hoursToAdd;
                        const newMinutes = minutes;

                        )
                        if (newHours >= 24) {
                            newHours %= 24;
                        }

                        
                        const adjustedTime = newHours.toString().padStart(2, '0') + ':' +
                            newMinutes.toString().padStart(2, '0');

                        return adjustedTime;
                        }

                        
                        const inputTime = prompt('Enter the time (HH:MM):');
                        const hoursToAdd = parseInt(prompt('Enter the number of hours to add:'));

                        try {
                        const adjustedTime = addHoursToTime(inputTime, hoursToAdd);
                        console.log(`Adjusted time: ${adjustedTime}`);
                        } catch (error) {
                        console.error(error.message);
                        }
14.	You have to create a age calculator in JavaScript.
                    function calculateAge(birthdate) {
                    
                    const birthDate = new Date(birthdate);

                    
                    const currentDate = new Date();

                    
                    const age = currentDate.getFullYear() - birthDate.getFullYear();

                    
                    if (
                        currentDate.getMonth() < birthDate.getMonth() ||
                        (currentDate.getMonth() === birthDate.getMonth() &&
                        currentDate.getDate() < birthDate.getDate())
                    ) {
                        
                        return age - 1;
                    }

                    return age;
                    }
                    const birthdate = prompt('Enter your birthdate (YYYY-MM-DD):');
                    try {
                    const age = calculateAge(birthdate);
                    console.log(`Your age is ${age} years.`);
                    } catch (error) {
                    console.error('Invalid birthdate format. Please use YYYY-MM-DD.');
                    }

Chapter 35 - 37 (Functions)
1.	Code the first line of a function displayAlert.
                    alert("This is an alert function")
2.	Code a function named askName that prompts the user to "Enter name" and assigns the answer to userName, which hasn't been declared beforehand.
                    function askName() {
                    const userName = prompt("Enter name");
                    if (userName !== null) {
                        console.log(`Hello, ${userName}!`);
                    } else {
                        console.log("No name entered.");
                    }
                    }
                    askName();
3.	Code a function that calls 2 other functions.
                    function mainFunction() {
                        function1();
                        function2();
                    }
                    function function1() {
                        console.log("This is function 1");
                    }
                    function function2() {
                    console.log("This is function 2");
                    }
                    mainFunction();
4.	Code a function that displays a prompt, "Enter name" and then displays the name in an alert. Call the function.
                    function displayNamePrompt() {
                    const name = prompt("Enter name");
                    if (name !== null) {
                        alert(`Hello, ${name}!`);
                    } else {
                        alert("No name entered.");
                    }
                    }
                    displayNamePrompt();
5.	Code the first line of a function named concat that has 3 parameters, the first three letters of the alphabet. Call that takes a variable, a string, and a number as arguments.
                    function concat(a, str, num) {}
6.	Code a function that has 2 parameters. Concatenate them and assign the result to a variable that hasn't been declared beforehand.
                    function concatenateStrings(str1, str2) {
                const result = str1 + str2;
                return result;
                }
                const concatenatedString = concatenateStrings("Hello, ", "world!");
                console.log(concatenatedString);
7.	Code a function that has three parameters. Multiply them and assign them to a variable that hasn't been declared yet.
                function multiplyThreeNumbers(num1, num2, num3) {
                const result = num1 * num2 * num3;
                return result;
                }
                const multiplicationResult = multiplyThreeNumbers(2, 3, 4);
                console.log(multiplicationResult);
8.	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
                function calculateAverage(numbers) {
                if (numbers.length === 0) {
                    return 0;
                }
                const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                const average = sum / numbers.length;
                return average;
                }
                const numbersArray = [5, 10, 15, 20];
                const avg = calculateAverage(numbersArray);
                console.log(`The average is: ${avg}`);
9.	Write a JavaScript function that takes two parameters and returns their sum.
                function sumOfTwoNumber(num1, num2){
                    const result = num1 + num2;
                    return result;
                }
                const sumResult = sumOfTwoNumber(2,3);
                console.log(sumResult);
10.	Write a JavaScript function that takes an array of numbers as input and returns the average of those numbers.
function calculateAverage(numbers) {
                if (numbers.length === 0) {
                    return 0;
                }
                const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                const average = sum / numbers.length;
                return average;
                }
                const numbersArray = [5, 10, 15, 20];
                const avg = calculateAverage(numbersArray);
                console.log(`The average is: ${avg}`);
11.	You have to capture the returned value from a function and store it in a variable?
function calculateAverage(numbers) {
                if (numbers.length === 0) {
                    return 0;
                }
                const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                const average = sum / numbers.length;
                return average;
                }
                const numbersArray = [5, 10, 15, 20];
                const avg = calculateAverage(numbersArray);
                console.log(`The average is: ${avg}`);
12.	Write a function which tells letter counts of (word).
                function countLetters(word) {
                    const letterCounts = {};
                    const lowerWord = word.toLowerCase();
                    for (const char of lowerWord) {
                        if (/^[a-z]$/.test(char)) {
                            if (letterCounts[char]) {
                            letterCounts[char]++;
                        } else {
                            letterCounts[char] = 1;
                        }
                        }
                    }
                    return letterCounts;
                    }
                    const word = "Hello, World!";
                    const result = countLetters(word);
                    for (const letter in result) {
                    console.log(`${letter}: ${result[letter]}`);
                    }
13.	Write a function to set (year) in date object.
14.	Write a function which tells the age of a person who Born on (dateOfBirth)
15.	Write a function which tells the presense of (word) in an array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
result should be in true or false
16.	Write a function which repeat (letter) 10 times.
Hint: "abcde" str.repeat(10)
17.	write a function which reverse array = ['a','b','c','d','e']
Hint: arr.reverse()
Chapter 38 (Local vs. Global Variables)
1.	Write a JavaScript function that demonstrates the usage of a local variable.
2.	How can you access a global variable inside a function in JavaScript?
Chapter 39, 40 (Switch Statements)
1.	Write a JavaScript switch statement that checks the value of a variable and performs different actions based on different cases.
2.	Write a JavaScript switch statement that check whether cityName given by user check the cityName if match alert the user and break the statement, if not default message will be shown to user.

 */
