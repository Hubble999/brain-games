#!/usr/bin/env node

import {startGame, generateExpressionAndCorrectAnswer, condition} from '../even.js';

console.log(startGame(condition, generateExpressionAndCorrectAnswer, condition));
