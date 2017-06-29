#!/usr/bin/env node
import inquirer from 'inquirer';
import generateBoilerplate from './templates';
import questions from './questions';

/**
 * Generate questions filtered by the config file if exist
 */
function generateQuestions() {
  const questionKeys = Object.keys(questions);

  return questionKeys.map(question => questions[question]);
}

/**
 * Start the process to generate component folder and files:
 * Filter question by config file
 * Get from the user the requirements to create the component folder and files
 * Generate files
 */
async function start() {
  try {
    const filteredQuestions = generateQuestions();
    const requirements = await inquirer.prompt(filteredQuestions);

    generateBoilerplate(requirements);

    console.log('Your component is created!');
  } catch (err) {
    console.log(err);
  }
}

start()
