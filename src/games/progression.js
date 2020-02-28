import startGame from "..";
import random from "./random.js";

const condition = "What number is missing in the progression?";

const generateQuestionAndCorrectAnswer = () => {
  const lengthProgression = 10;
  const stepProgression = random(2, 5);
  const startNum = random(0, 20);
  const hideNum = random(0, 10);
  const expressionArr = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    expressionArr.push(stepProgression * i + startNum);
  }

  expressionArr[hideNum] = "..";
  const correct = stepProgression * hideNum + startNum;

  const answer = expressionArr.join(" ");
  return [answer, correct];
};
const run = () => {
  startGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
