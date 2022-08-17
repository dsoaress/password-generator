const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = lowercaseLetters.toUpperCase();
const numbers = "0123456789";
const specialCharacters = "!?.@#$%&*()_+-=";

type Options = {
  upperCase: boolean;
  numbers: boolean;
  specialCharacters: boolean;
  length: number;
};

const getLowercaseLetters = () =>
  lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
const getUppercaseLetters = () =>
  uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
const getNumbers = () => numbers[Math.floor(Math.random() * numbers.length)];
const getSpecialCharacters = () =>
  specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

export const generatePassword = ({
  length,
  numbers,
  specialCharacters,
  upperCase,
}: Options) => {
  const password = [];
  const possibleCharacters = [getLowercaseLetters];

  if (upperCase) possibleCharacters.push(getUppercaseLetters);
  if (numbers) possibleCharacters.push(getNumbers);
  if (specialCharacters) possibleCharacters.push(getSpecialCharacters);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password.push(possibleCharacters[randomIndex]());
  }

  return password.join("");
};
