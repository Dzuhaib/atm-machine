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
console.log(chalk.green("--------------------------"));
console.log(chalk.white("Welcome to myBank"));
console.log(chalk.green("--------------------------"));
if (myBank.pin === myPin) {
    console.log(chalk.green("--------------------------"));
    console.log(chalk.white("Welcome to myBank"));
    console.log(chalk.green("--------------------------"));
    console.log(chalk.green("You entered correct pin code!"));
    console.log(chalk.green("--------------------------"));
    let operationBank = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Balance", "Rast Transfer"],
        },
    ]);
    if (operationBank.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fast",
                message: "Select amount",
                type: "list",
                choices: ["3000", "4000", "5000", "6000"],
            },
        ]);
        myBalance -= fastCash.fast;
        console.log(chalk.green("----------------------"));
        console.log(chalk.green("Fast cash withrawal successful"));
        console.log(chalk.white("Your remainin balance is: " + myBalance));
        console.log(chalk.green("----------------------"));
        // Adding topup function to recharge bank Balance
        let topUp = await inquirer.prompt([
            {
                name: "topup",
                message: "Would you like to topup your account",
                type: "list",
                choices: ["Yes", "No"]
            }
        ]);
        if (topUp.topup === "Yes") {
            let addAmount = await inquirer.prompt([
                {
                    name: "addamount",
                    message: "Add balance",
                    type: "number"
                }
            ]);
            myBalance += addAmount.addamount;
            console.log(chalk.green("----------------------"));
            console.log(chalk.green("Balance successfully added"));
            console.log(chalk.white(" Your new balance is:" + myBalance));
            console.log(chalk.green("----------------------"));
        }
        else {
            console.log(chalk.green("----------------------"));
            console.log("Thank you for using myBank");
            console.log(chalk.green("----------------------"));
        }
    }
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
            console.log(chalk.red("Insufficient balance!"));
            console.log(chalk.white("Your current balance is" + " " + myBalance));
            console.log("----------------------------------------------------------------");
        }
        else {
            // =, -=, +=
            myBalance -= amountBank.amount;
            console.log(chalk.green("----------------------"));
            console.log(chalk.green("Withdrawal successful!"));
            console.log(chalk.white("Your remaining balance is:" + " " + myBalance));
            // Adding topup function to recharge bank Balance
            let topUp = await inquirer.prompt([
                {
                    name: "topup",
                    message: "Would you like to topup your account",
                    type: "list",
                    choices: ["Yes", "No"]
                }
            ]);
            if (topUp.topup === "Yes") {
                let addAmount = await inquirer.prompt([
                    {
                        name: "addamount",
                        message: "Add balance",
                        type: "number"
                    }
                ]);
                myBalance += addAmount.addamount;
                console.log(chalk.green("----------------------"));
                console.log(chalk.green("Balance successfully added"));
                console.log(chalk.white(" Your new balance is:" + myBalance));
                console.log(chalk.green("----------------------"));
            }
            else {
                console.log(chalk.green("----------------------"));
                console.log("Thank you for using myBank");
                console.log(chalk.green("----------------------"));
            }
        }
        // Checking Balance
    }
    else if (operationBank.operation === "Check Balance") {
        console.log("-----------------------------------");
        console.log(chalk.white("Your balance is:" + " " + myBalance));
        console.log(chalk.green("----------------------"));
        console.log("Thank you for using myBank");
        console.log(chalk.green("----------------------"));
    }
    // Money transferring - Bank through and Local Banks + Additional
    if (operationBank.operation === "Rast Transfer") {
        let rastTran = await inquirer.prompt([
            {
                // Transfer Type
                name: "accountType",
                message: "Choose bank",
                type: "list",
                choices: ["Bank transfer", "Local Transfer"],
            },
        ]);
        if (rastTran.accountType === "Bank transfer") {
            let banks = await inquirer.prompt([
                {
                    // Banks accounts
                    name: "Banks",
                    message: "Choose your bank",
                    type: "list",
                    choices: [
                        "Allied Bank",
                        "Meezan Bank",
                        "Al-habib Bank",
                        "Habib Metro",
                        "MCB",
                        "Bank Of Panjab",
                    ],
                },
                {
                    name: "account",
                    message: "Enter account number:",
                    type: "number",
                },
                {
                    name: "Transfer",
                    message: "Enter amount you want to transfer:",
                    type: "number",
                },
            ]);
            // Adding function if user input amount is above than the bank balance then show the message: Insufficient balance! + Printed bank balance
            if (banks.Transfer > myBalance) {
                console.log("----------------------------------------------------------------");
                console.log(chalk.red("Insufficient balance!."));
                console.log(chalk.white(" Your current balance is:" + " " + myBalance));
            }
            else {
                myBalance -= banks.Transfer;
                console.log(chalk.green("------------------------------------------"));
                console.log(chalk.green("Amount successfully transferred"));
                console.log(chalk.white("Your remaining balance is:" + " " + myBalance));
                console.log(chalk.green("----------------------"));
                console.log("Thank you for using myBank");
                console.log(chalk.green("----------------------"));
            }
        }
        // Local Transfer options
        else {
            let otherBanks = await inquirer.prompt([
                {
                    // Local transfers
                    name: "otherTrans",
                    message: "Choose bank",
                    type: "list",
                    choices: ["Jazzcash", "Easypaisa", "SadaPay"],
                },
                {
                    name: "account",
                    message: "Enter account number:",
                    type: "number",
                },
                {
                    name: "Transfer",
                    message: "Enter amount you want to transfer:",
                    type: "number",
                },
            ]);
            // Adding function if user input amount is above than the bank balance then show the message: Insufficient balance! + Printed bank balance
            if (otherBanks.Transfer > myBalance) {
                console.log("----------------------------------------------------------------");
                console.log(chalk.red("Insufficient balance!."));
                console.log(chalk.white(" Your current balance is:" + " " + myBalance));
            }
            else {
                myBalance -= otherBanks.Transfer;
                console.log("------------------------------------------");
                console.log(chalk.green("Amount successfully transferred"));
                console.log(chalk.white("Your remaining balance is:" + " " + myBalance));
                console.log(chalk.green("----------------------"));
                console.log("Thank you for using myBank");
                console.log(chalk.green("----------------------"));
            }
        }
    }
}
// Added else statement, If pin is wrong then print this message
else {
    console.log(chalk.red("-------------------"));
    console.log(chalk.bgWhiteBright.red("Incorrect pin code"));
    console.log(chalk.red("-------------------"));
}
