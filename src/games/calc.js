import startGame from "..";
import random from "./random.js";

const condition = "What is the result of the expression?";
const symbol = "+-*";

const generateQuestionAndCorrectAnswer = () => {
  const left = random(1, 20);
  const right = random(1, 20);
  const randomSymbol = symbol[random(0, symbol.length - 1)];
  const answer = `${left} ${randomSym} ${right}`;
  let correct;
  switch (randomSymbol) {
    case "-":
      correct = left - right;
      break;
    case "+":
      correct = left + right;
      break;
    case "*":
      correct = left * right;
      break;
  }
  return [answer, correct];
};

const run = () => {
  startGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
