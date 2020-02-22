import startGame from "..";
import random from "./random.js";

const condition = "What number is missing in the progression?";

const generateExpressionAndCorrectAnswer = () => {
  let startNum = random(1, 50);
  const hideNum = random(1, 8);
  const expressionArr = [];
  for (let i = 0; i < 10; i += 1) {
    expressionArr.push((startNum += 2));
  }

  expressionArr[hideNum] = "..";
  let correct = "";
  for (let i = 0; i < expressionArr.length; i += 1) {
    if (expressionArr[i] === "..") {
      correct = expressionArr[i - 1] + 2;
    }
  }
  const answer = expressionArr.join(" ");
  return [answer, correct];
};
const run = () => {
  console.log(startGame(condition, generateExpressionAndCorrectAnswer));
};
export default run;
