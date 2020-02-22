import startGame from "..";
import random from "./random.js";

const isPrime = num => {
  if (num === 1) {
    return true;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const condition =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateExpressionAndCorrectAnswer = () => {
  const answer = random(1, 20);
  const correct = isPrime(answer) ? 'yes' : 'no';
  return [answer, correct];
};

const run = () => {
  console.log(startGame(condition, generateExpressionAndCorrectAnswer));
};

export default run;
