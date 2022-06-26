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
        if (!lowerConfirm && !upperConfirm && !numberConfim && !specialConfirm){  //Check if none was selectec
          window.alert("You need to make at least one selection");
          return generatePassword();
        } //Four selections check
        else if (lowerConfirm && upperConfirm && numberConfim && specialConfirm){
          userSelector = alphabetLow.concat(alphabetUp,number,specialCh);
        }
        //Three selections check
        else if (lowerConfirm && upperConfirm && numberConfim){      //
        userSelector = alphabetLow.concat(alphabetUp,number);          //
        }
        else if (lowerConfirm && upperConfirm && specialConfirm){    //
          userSelector = alphabetLow.concat(alphabetUp,specialCh);     //
        }
        else if (lowerConfirm && numberConfim && specialConfirm){   //
          userSelector = alphabetLow.concat(number,specialCh);        //
        }
        else if (upperConfirm && numberConfim && specialConfirm){  //
          userSelector = alphabetUp.concat(number,specialCh);        //
        }
        //two selections check
        else if (lowerConfirm && upperConfirm) {
          userSelector = alphabetLow.concat(alphabetUp);
        }
        else if (lowerConfirm && numberConfim) {
        userSelector = alphabetLow.concat(number);
        }
        else if (lowerConfirm && specialConfirm){
          userSelector = alphabetLow.concat(specialCh);
        }
        else if (upperConfirm && numberConfim){
          userSelector = alphabetUp.concat(number);
        }
        else if (upperConfirm && specialConfirm){
          userSelector = alphabetUp.concat(specialCh);
        }
        else if (numberConfim && specialConfirm){
          userSelector = number.concat(specialCh);
        }
        //One Selection Check
        else if (lowerConfirm){
          userSelector = alphabetLow;
        }
        else if (upperConfirm){
          userSelector = alphabetUp;
        }
        else if (numberConfim){
          userSelector = number;
        }
        else if (specialConfirm){
          userSelector = specialCh;
        }

      }
      for (var i = 0; i < lenghtConfirm; i++) {
        var userRandom = userSelector[Math.floor(Math.random() * userSelector.length)];
        pwdHolder.push(userRandom);
      }

      //convert pwdHolder to string
      pwdString = pwdHolder.join("");
      debugger;
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


