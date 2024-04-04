#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 10000; // Dollars
let myPin = 7258; // Pin Code

let myBank = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code:",
    type: "number",
  },
]);
console.log(chalk.white("Welcome to myBank"));
if (myBank.pin === myPin) {
  console.log(chalk.green("You entered correct pin code!"));
  console.log("-----------------------------")
  let operationBank = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "Check Balance", "Rast Transfer"],
    },
  ]);

  if (operationBank.operation === "Withdraw") {
    let amountBank = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);

    // Adding condition if balance is above the myBalance then show the message + Additional
    if (amountBank.amount > myBalance) {
      console.log(chalk.red("Insufficient balance!. Your current balance is" + " " + myBalance));
      console.log("----------------------------------------------------------------")
    } else {
      // =, -=, +=
      myBalance -= amountBank.amount;
      console.log("----------------------")
      console.log(chalk.green("Withdrawal successful!"));
      console.log(chalk.white("Your remaining balance is:" + " " + myBalance));
    }

    // Checking Balance
  } else if (operationBank.operation === "Check Balance") {
    console.log("-----------------------------------")
    console.log(chalk.white("Your balance is:" + " " + myBalance));
  }

  // Money transferring funtionality + Additional
  if (operationBank.operation === "Rast Transfer") {
    let rastTran = await inquirer.prompt([
        {
            name: "account",
            message: "Enter account number:",
            type: "number",
        },
        {
        name: "Transfer",
        message: "Enter amount you want to transfer:",
        type: "number",
        }
    ]);
    if (rastTran.Transfer > myBalance) {
      console.log("----------------------------------------------------------------")
      console.log(chalk.red("Insufficient balance!. Your current balance is:" + " " + myBalance));
    } else {
      myBalance -= rastTran.Transfer;
      console.log("------------------------------------------")
      console.log(chalk.green("Amount successfully transferred" ));
      console.log(chalk.white("Your remaining balance is:"+ " " + myBalance));
    }
  }
} else {
  console.log("-------------------")
  console.log(chalk.bgWhiteBright.red("Incorrect pin code"));
}
