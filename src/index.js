import readlineSync from 'readline-sync';
import isEven from './even.js';
import random from './random.js';


const startGame = () => {

   
   let count = 3;
   const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}`);
    const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
    console.log(condition);
	for (let i = 0; i < 3; i += 1 ) {
  const currentNumber = random(1, 99);
  console.log('Question:' + currentNumber);
  const answer = readlineSync.question('You answer:');
    if (answer === isEven(currentNumber)) {
         console.log('Correct');
    } 
    else  {
    return `"${answer}" is wrong answer ;(. Correct answer was "${isEven(currentNumber)}".\nLet's try again, ${name}!`;
    }
      }
     return `Congratulations, ${name}!`;
    };




export default startGame;
