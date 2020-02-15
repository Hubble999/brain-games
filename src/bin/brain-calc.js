#!/usr/bin/env node

import {startGame, generateExpressionAndCorrectAnswer, condition} from '../calc.js';

console.log(startGame(condition, generateExpressionAndCorrectAnswer, condition));