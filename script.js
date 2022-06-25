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

alphabetLow.forEach(element => {alphabetUp.push(element.toUpperCase())}); //Creating the Uppercase array from the lowercase array
console.log(alphabetUp);

//Funtion to generate the passord
generatePassword = function() {
debugger;
var lenghtConfirmprompt = window.prompt("Please type the lenght for the password.  Choose between 8 and 128 Characters");
lenghtConfirm = parseInt(lenghtConfirmprompt);
console.log (lenghtConfirm);

    if (lenghtConfirmprompt === "" || lenghtConfirm < 8 || lenghtConfirm > 128)  {
        window.alert("You need to provide a number between 8 and 128.");

        return generatePassword ();
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
          return generatePassword ();
        } //Four selections check
        else if (lowerConfirm && upperConfirm && numberConfim && specialConfirm){
          userSelector=alphabetLow.concat(alphabetUp,number,specialCh);
        }
        //Three selections check
        else if (lowerConfirm && upperConfirm && numberConfim){      //
        userSelector=alphabetLow.concat(alphabetUp,number);          //
        }
        else if (lowerConfirm && upperConfirm && specialConfirm){    //
          userSelector=alphabetLow.concat(alphabetUp,specialCh);     //
        }
        else if (lowerConfirm && numberConfim && specialConfirm){   //
          userSelector=alphabetLow.concat(number,specialCh);        //
        }
        else if (upperConfirm && numberConfim && specialConfirm){  //
          userSelector=alphabetUp.concat(number,specialCh);        //
        }
        //two selections check
      }


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


