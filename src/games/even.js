import startGame from "..";
import random from "./random.js";

const isEven = num => num % 2 === 0;
const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateQuestionAndCorrectAnswer = () => {
  const answer = random(1, 20);
  const correct = isEven(answer) ? "yes" : "no";
  return [answer, correct];
};

const run = () => {
  startGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
