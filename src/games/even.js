import startGame from ".";
import random from "./random.js";

const isEven = num => num % 2 === 0;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateExpressionAndCorrectAnswer = () => {
  const answer = random(1, 20);
  const correct = isEven(randomNum) ? 'yes' : 'no';
  return [answer, correct];
};

export {generateExpressionAndCorrectAnswer, condition, startGame};