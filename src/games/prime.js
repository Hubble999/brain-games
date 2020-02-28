import startGame from "..";
import random from "./random.js";

const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const condition =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAndCorrectAnswer = () => {
  const answer = random(1, 20);
  const correct = isPrime(answer) ? "yes" : "no";
  return [answer, correct];
};

const run = () => {
  startGame(condition, generateQuestionAndCorrectAnswer);
};

export default run;
