import startGame from ".";
import random from "./random.js";

const condition = 'What is the result of the expression?';



const generateExpressionAndCorrectAnswer = () => {
  const sym = "+-*";
  const left = random(1, 20);
  const right = random(1, 20);
  const randomSym = sym[random(0, 2)];
  const expression = `${left} ${randomSym} ${right}`;
  let correct;
  if (randomSym === "-") {
    correct = left - right;
  }
  if (randomSym === "+") {
    correct = left + right;
  }
  if (randomSym === "*") {
    correct = left * right;
  }
  return [expression, correct];
};

export {generateExpressionAndCorrectAnswer, startGame, condition};