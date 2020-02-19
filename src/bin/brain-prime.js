#!/usr/bin/env node

import {
  startGame,
  generateExpressionAndCorrectAnswer,
  condition
} from "../prime.js";

console.log(
  startGame(condition, generateExpressionAndCorrectAnswer, condition)
);
