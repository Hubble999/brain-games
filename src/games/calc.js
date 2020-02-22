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
switch (randomSym) {
  case '-':
    correct = left - right;
    break;
  case '+':
    correct = left + right;
    break;
  case '*':
    correct = left * right;
    break;
 };
};

export {generateExpressionAndCorrectAnswer, startGame, condition};