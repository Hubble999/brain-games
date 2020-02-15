import readlineSync from "readline-sync";


const startGame = (condition, expressionAndAnswer) => {
  const rounds = 3;
  const name = readlineSync.question("May I have your name?");
  console.log(`Hello, ${name}`);
  console.log(condition);

  for (let i = 0; i < rounds; i += 1) {
    const exAndAnsw = expressionAndAnswer();
    console.log("Question:" + exAndAnsw[0]);
    const answer = readlineSync.question("You answer:");
    const correctAnsw = exAndAnsw[1];
    if (answer === String(correctAnsw)) {
      console.log("Correct!");
    } else {
      return `"${answer}" is wrong answer ;(. Correct answer was "${correctAnsw}".\nLet's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};
export default startGame;
