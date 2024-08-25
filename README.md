# Password-Generator
This code uses confirm messages to ask the user about the input types they want to include in their password. It then creates an array userGuess that stores the selected input types. The user is prompted to enter the length of their password, and the code validates the input to ensure it is between 8 and 128 characters. Finally, the code generates a password by randomly selecting characters from the userGuess array and displays the generated password to the user.

1. Input Type Selection: The user is asked to select the types of characters they want to include in their password, such as: * Uppercase letters * Lowercase letters * Numbers * Special characters

2. User Input Array: An array is created to store the selected input types. This array will be used to generate the password.

3. Password Length Prompt: The user is prompted to enter the length of their password, which must be between 8 and 128 characters.

4. Password Generation: A loop is run to generate the password. In each iteration, a random character is selected from the user input array and added to the password. This continues until the password reaches the desired length.

5. Password Display: The generated password is displayed to the user.

These are the main parts of the password generator!