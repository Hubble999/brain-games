import startGame from "..";
import random from "./random.js";

const condition = "Find the greatest common divisor of given numbers.";
const greatestCommonDivisor = (numY, numX) => {
  while (numY !== 0) {
    numY = numX % (numX = numY);
  }
  return numX;
};
const generateQuestionAndCorrectAnswer = () => {
  let numX = random(1, 20);
  let numY = random(1, 20);
  const answer = `${numX} ${numY}`;
  const correct = () => {
   return  greatestCommonDivisor(numX, numY);
  };
  return [answer, correct()];
};

const run = () => {
  startGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
