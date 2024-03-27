"use strict";
import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "favoriteLanguage",
    message: "What is your favorite programming language?",
    choices: ["JavaScript", "Python", "Ruby", "Other"],
  },
  {
    type: "list",
    name: "preferredEditor",
    message: "Which editor do you prefer?",
    choices: ["VS Code", "Sublime Text", "Atom", "Other"],
  },
  {
    type: "input",
    name: "editorFeature",
    message: "What's one feature you wish your editor had?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(
    `
    Thank you, ${answers.name} for your responses!
    Favorite Programming Language: ${answers.favoriteLanguage}
    Preferred Editior: ${answers.preferredEditor}
    Editor Feature: ${answers.editorFeature}
    `
  );
});
