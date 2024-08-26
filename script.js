const MIN_PASSWORD_LENGTH = 12;
const CHARACTER_SETS = {
  all: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?',
  letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789'
};
const passwordTextarea = document.getElementById('password');
passwordTextarea.placeholder = 'WHITE HAT WOLF';
const passwordLengthInput = document.getElementById('password-length');
const characterSetSelect = document.getElementById('character-set');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');
const passwordTextarea = document.getElementById('password');
const passwordStrengthElement = document.getElementById('password-strength');
const passwordHintElement = document.getElementById('password-hint');
const scrollerCheckbox = document.getElementById('scroller');
let scrollerInterval = null; // declare scrollerInterval as a let variable

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
scrollerCheckbox.addEventListener('change', toggleScroller);

function generatePassword() {
  const passwordLength = parseInt(passwordLengthInput.value);
  const characterSet = characterSetSelect.value;

  if (passwordLength < MIN_PASSWORD_LENGTH) {
    alert(`Password length must be at least ${MIN_PASSWORD_LENGTH} characters`);
    return;
  }

  if (isNaN(passwordLength)) {
    alert('Password length must be a number');
    return;
  }

  const characters = CHARACTER_SETS[characterSet];
  let password = generatePasswordString(passwordLength, characters);

  passwordTextarea.value = password;

  const passwordStrength = getPasswordStrength(password);
  passwordStrengthElement.textContent = `Password Strength: ${passwordStrength}`;
  passwordHintElement.textContent = getPasswordHint(passwordStrength);
}

function copyPassword() {
  passwordTextarea.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

function generatePasswordString(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

function getPasswordStrength(password) {
  const strengthTests = [
    { regex: /[a-z]/, score: 1 },
    { regex: /[A-Z]/, score: 1 },
    { regex: /[0-9]/, score: 1 },
    { regex: /[!@#$%^&*()_+-={}:<>?]/, score: 1 }
  ];

  let strength = 0;
  if (password.length >= MIN_PASSWORD_LENGTH) {
    strength += 1;
  }

  strengthTests.forEach(test => {
    if (test.regex.test(password)) {
      strength += test.score;
    }
  });

  switch (strength) {
    case 1:
      return 'Weak';
    case 2:
      return 'Fair';
    case 3:
      return 'Good';
    case 4:
      return 'Strong';
    case 5:
      return 'Very Strong';
    default:
      return 'Unknown'; // add a default case
  }
}

function getPasswordHint(passwordStrength) {
  switch (passwordStrength) {
    case 'Weak':
      return 'Use a longer password with a mix of characters, numbers, and symbols.';
    case 'Fair':
      return 'Add more characters or symbols to make your password stronger.';
    case 'Good':
      return 'Your password is good, but consider adding more complexity.';
    case 'Strong':
      return 'Your password is strong, but you can still make it more complex.';
    case 'Very Strong':
      return 'Your password is very strong, good job!';
    default:
      return 'Unknown'; // add a default case
  }
}

function toggleScroller() {
  const useScroller = scrollerCheckbox.checked;
  if (useScroller) {
    scrollerInterval = setInterval(generatePassword, 1000); // generate a new password every 1 second
  } else {
    clearInterval(scrollerInterval);
  }
}
