import startGame from ".";
import random from "./random.js";

const isPrime = num => {
  if (num === 1) {
    return "no";
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return "no";
    }
  }
  return "yes";
};

const condition =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateExpressionAndCorrectAnswer = () => {
  const randomNum = random(1, 20);
  const correct = isPrime(randomNum);
  return [randomNum, correct];
};

export { startGame, generateExpressionAndCorrectAnswer, condition };