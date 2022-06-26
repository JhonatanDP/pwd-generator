# Password generator

Project Repository address: https://github.com/JhonatanDP/pwd-generator

Project live web page: https://jhonatandp.github.io/pwd-generator/


## Full Site
![jhonatandp github io_pwd-generator_](https://user-images.githubusercontent.com/106892660/175830889-eee81c26-0cca-41db-a941-52e54f52adb6.png)

## Descripton

- This project is about creating a password generator using javascript.  


### Acceptance Criteria

- GIVEN I need a new, secure password
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no more than 128 characters
- WHEN asked for character types to include in the password
- THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page


## Work done to complete the challenge
- I declared some variables that will save the user selection during the prompt.
- I declared some variables with the corresponding arrays (lowercase, number and special character).
- I created the uppercase array using toUpperCase method.
- I declared a function called generatePassword () name was giving.
- I declared a new variable to save the lenght. (user input)
- I used if and else if to check variables based on user selections.
- I divided those selection based on combinations.
- I used concat to merge arrays selected by the user.
- I used a for loop to created a random array based on the user selection and use join to removed "" and covert it to string.
- I passed the value of the variable to the function to writePassword.
