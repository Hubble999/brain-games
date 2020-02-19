import startGame from ".";
import random from "./random.js";

const isEven = num => (num % 2 === 0 ? "yes" : "no");
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateExpressionAndCorrectAnswer = () => {
  const randomNum = random(1, 20);
  const correct = isEven(randomNum);
  return [randomNum, correct];
};

export { startGame, generateExpressionAndCorrectAnswer, condition };
