// Assignment code here
var lenghtConfirm; //confirmed lenght number
var lowerConfirm;  //lowercase user confirmation
var upperConfirm;  //uppercase user confirmation
var numberConfim;  //number user confirmation 
var specialConfirm;  //special character user confirmation
var userSelector;   //to save user choice selected
//lower case alphabet
alphabetLow = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//Upper case array after conversion
alphabetUp = [];
//numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//special characters
specialCh = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
pwdHolder =[]; //Hold the password before converting it to string
var pwdString;  //Hold the password after using join to remove "" and converted it to string



alphabetLow.forEach(element => {alphabetUp.push(element.toUpperCase())}); //Creating the Uppercase array from the lowercase array

//Funtion to generate the passord
var generatePassword = function() {

//Declaration of the variable to hold the value of the user input, in this case will be a string
var lenghtConfirmprompt = window.prompt("Please type the lenght for the password.  Choose between 8 and 128 Characters");

lenghtConfirm = parseInt(lenghtConfirmprompt);  //converting the string user input into a number

    if (lenghtConfirmprompt === "" || lenghtConfirm < 8 || lenghtConfirm > 128)  {
        window.alert("You need to provide a number between 8 and 128.");

        return generatePassword();
    }
    else if (lenghtConfirmprompt === null) {
             window.alert("You have selected to cancel the request.");
    }

    else {
      lowerConfirm = confirm("Do you want to include lowercase characters?");
      upperConfirm = confirm("Do you want to include Uppercase characters?");
      numberConfim = confirm("Do you want to include numbers?");
      specialConfirm = confirm("Do you want to include special characters?");
        if (!lowerConfirm && !upperConfirm && !numberConfim && !specialConfirm){  //Check if none was selected
          window.alert("You need to make at least one selection");
          return generatePassword(); //Return to the start of the function
        } //Four selections check
        else if (lowerConfirm && upperConfirm && numberConfim && specialConfirm){
          userSelector = alphabetLow.concat(alphabetUp,number,specialCh); //concat arrays selected together
        }
        //Three selections check Lowercase, uppercase and numbers
        else if (lowerConfirm && upperConfirm && numberConfim){     
        //merge arrays 
        userSelector = alphabetLow.concat(alphabetUp,number);        
        }
        //Check for lowercase, uppercase and special character
        else if (lowerConfirm && upperConfirm && specialConfirm){    
        //merge arrays
          userSelector = alphabetLow.concat(alphabetUp,specialCh);     
        }
        //check for lowercase, number and special character selection
        else if (lowerConfirm && numberConfim && specialConfirm){   
        //merge arrays
          userSelector = alphabetLow.concat(number,specialCh);        
        }
        //check for uppercase, number and special character
        else if (upperConfirm && numberConfim && specialConfirm){  
        //merge arrays selected
          userSelector = alphabetUp.concat(number,specialCh);        
        }

        //two selections check
        //check for lowercase and uppercase
        else if (lowerConfirm && upperConfirm) {
        //merge arrays lowercase and uppercase  
          userSelector = alphabetLow.concat(alphabetUp);
        }
        //check for lowercase and number
        else if (lowerConfirm && numberConfim) {
        //merge lowercase and number  
        userSelector = alphabetLow.concat(number);
        }
        //check for lower case and special character
        else if (lowerConfirm && specialConfirm){
        //merge lowercase and specual character  
          userSelector = alphabetLow.concat(specialCh);
        }
        //check for uppercase and number
        else if (upperConfirm && numberConfim){
        //merge Uppercase and number arrays  
          userSelector = alphabetUp.concat(number);
        }
        //check for uppercase and special character
        else if (upperConfirm && specialConfirm){
        //merge Uppercase and special character together
          userSelector = alphabetUp.concat(specialCh);
        }
        //check for number and special character
        else if (numberConfim && specialConfirm){
        //merge number and special character arrays
          userSelector = number.concat(specialCh);
        }
        //One Selection Check
        //check for lower case
        else if (lowerConfirm){
          userSelector = alphabetLow;
        }
        //check for uppercase
        else if (upperConfirm){
          userSelector = alphabetUp;
        }
        //check for number
        else if (numberConfim){
          userSelector = number;
        }
        //check for special character
        else if (specialConfirm){
          userSelector = specialCh;
        }

      }
      //creating a new array using the math floor and math random taking in consideration the lenght 
      //of the user input and using push for the new array.
      for (var i = 0; i < lenghtConfirm; i++) {
        var userRandom = userSelector[Math.floor(Math.random() * userSelector.length)];
        pwdHolder.push(userRandom);
      }

      //convert pwdHolder to string
      pwdString = pwdHolder.join("");
     // writePassword(pwdString);
      return pwdString;
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




