#!/usr/bin/env node

import {startGame, generateExpressionAndCorrectAnswer, condition} from '../gcd.js';

console.log(startGame(condition, generateExpressionAndCorrectAnswer));