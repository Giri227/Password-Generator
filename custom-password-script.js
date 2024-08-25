// custom-password-script.js

const customPasswordInput = document.getElementById('custom-password-input');
const generateCustomPasswordButton = document.getElementById('generate-custom-password');
const customPasswordOutput = document.getElementById('custom-password-output');
const customPasswordStrength = document.getElementById('custom-password-strength');
const customPasswordHint = document.getElementById('custom-password-hint');
const backToMainButton = document.getElementById('back-to-main');

generateCustomPasswordButton.addEventListener('click', generateCustomPassword);
backToMainButton.addEventListener('click', goBackToMain);

function generateCustomPassword() {
    const userInput = customPasswordInput.value.trim(); // trim the input to remove whitespace
    const passwordLength = userInput.length + 4; // add 4 random numbers to the password
    let customPassword = '';

    // add the user's input to the password
    customPassword += userInput;

    // generate 4 random numbers and add them to the password
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        customPassword += randomNumber.toString();
    }

    // shuffle the password to mix the user's input with the random numbers
    customPassword = shuffleString(customPassword);

    customPasswordOutput.value = customPassword;

    // Calculate password strength
    const passwordStrength = calculatePasswordStrength(customPassword);
    customPasswordStrength.textContent = `Password strength: ${passwordStrength}`;

    // Generate password hint
    const passwordHint = generatePasswordHint(customPassword);
    customPasswordHint.textContent = `Hint: ${passwordHint}`;
}

function shuffleString(str) {
    var arr = str.split('');
    var n = arr.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr.join('');
}

function calculatePasswordStrength(password) {
    let strength = '';

    if (password.length < 8) {
        strength = 'Weak';
    } else if (password.length >= 8 && password.length < 12) {
        strength = 'Medium';
    } else {
        strength = 'Strong';
    }

    return strength;
}

function generatePasswordHint(password) {
    const hint = password.substring(0, 2) + '***';
    return hint;
}

function goBackToMain() {
    window.location.href = 'index.html'; // replace with the URL of your main page
}