const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
  // Make lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse and compare
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

checkBtn.addEventListener('click', () => {
  const inputValue = textInput.value.trim();

  if (inputValue === '') {
    alert('Please input a value');
  } else {
    const isAPalindrome = isPalindrome(inputValue);
    result.textContent = `${inputValue} is ${isAPalindrome ? '' : 'not '}a palindrome`;
  }
});
