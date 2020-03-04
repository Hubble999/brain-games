import playGame from "..";
import random from "../random.js";

const condition = "What number is missing in the progression?";

const generateQuestionAndCorrectAnswer = () => {
  const lengthProgression = 10;
  const stepProgression = random(2, 5);
  const startNum = random(0, 20);
  const hideNumIndex = random(0, lengthProgression);
  const expressionArr = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    expressionArr.push(stepProgression * i + startNum);
  }

  expressionArr[hideNumIndex] = "..";
  const correctAnswer = stepProgression * hideNumIndex + startNum;

  const question = expressionArr.join(" ");
  return [question, String(correctAnswer)];
};
const run = () => {
  playGame(condition, generateQuestionAndCorrectAnswer);
};
export default run;
