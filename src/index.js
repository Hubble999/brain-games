import readlineSync from "readline-sync";

const playGame = (condition, questionAndAnswer) => {
  const roundsCount = 3;
  const name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${name}`);
  console.log(condition);

  for (let i = 0; i < roundsCount; i += 1) {
    const [getQuestion, correctAnswer] = questionAndAnswer();
    console.log("Question:" + getQuestion);
    const answer = readlineSync.question("You answer:");
    if (answer === String(correctAnswer)) {
      console.log("Correct!");
    } else {
      const wrongAnswer = console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`
      );
      return wrongAnswer;
    }
  }
  const congratulations = console.log(`Congratulations, ${name}!`);
  return congratulations;
};
export default playGame;
