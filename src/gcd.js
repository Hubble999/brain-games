import startGame from ".";
import random from "./random.js";

const condition = "Find the greatest common divisor of given numbers.";
const generateExpressionAndCorrectAnswer = () => {
  let numX = random(1, 20);
  let numY = random(1, 20);
  const expression = `${numX} ${numY}`;
  const correct = () => {
    while (numY !== 0) {
      numY = numX % (numX = numY);
    }
    return numX;
  };
  return [expression, correct()];
};
generateExpressionAndCorrectAnswer();

export { generateExpressionAndCorrectAnswer, startGame, condition };
