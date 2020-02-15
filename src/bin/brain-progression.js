#!/usr/bin/env node

import {startGame, generateExpressionAndCorrectAnswer, condition} from '../progression.js';

console.log(startGame(condition, generateExpressionAndCorrectAnswer, condition));