import playGame from "..";
import random from "./random.js";

const condition = "What is the result of the expression?";
const signs = "+-*";

const generateQuestionAndCorrectAnswer = () => {
  const left = random(1, 20);
  const right = random(1, 20);
  const randomSigns = signs[random(0, sings.length - 1)];
  const question = `${left} ${randomSings} ${right}`;
  let correctAnswer;
  switch (randomSigns) {
    case "-":
      correctAnswer = left - right;
      break;
    case "+":
      correctAnswer = left + right;
      break;
    case "*":
      correctAnswer = left * right;
      break;
  }
  return [question, correctAnswer];
};

const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
