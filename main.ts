#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let quiz =[
    {
      Task:chalk.italic.cyan.bold("\n(1). what is TypeScript?\n"),
      choices: [
        chalk.italic.yellowBright.bold("(a) A superset of Javascript"),
        chalk.italic.cyanBright.bold("(b) A superset of python"),
        chalk.italic.greenBright.bold("(c) A superset of nextjs"),
      ],
    correct:chalk.italic.yellowBright.bold("(a) A superset of Javascript")
    },
    {
     Task: chalk.italic.cyan.bold(
        "\n(2). Which command is used to compile a TypeScript file into JavaScript?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). ts compile file.ts"),
        chalk.italic.cyanBright.bold("(b). tsc file.ts"),
        chalk.italic.greenBright.bold("(c). compile file.ts"),
      ],
    correct:chalk.italic.cyanBright.bold("(b). tsc file.ts")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(3). Which keyword is used to declare a variable in TypeScript?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). Let"),
        chalk.italic.cyanBright.bold("(b). Const"),
        chalk.italic.greenBright.bold("(c). All of the above"),
      ],
    correct:chalk.italic.greenBright.bold("(c). All of the above")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(4). Which of the following is NOT a valid TypeScript data type?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). Array"),
        chalk.italic.cyanBright.bold("(b). String"),
        chalk.italic.greenBright.bold("(c). Number"),
      ],
    correct:chalk.italic.yellowBright.bold("(a). Array")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(5). How do you install TypeScript globally using npm\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). npm typescript install -g"),
        chalk.italic.cyanBright.bold("(b). npm install -g typescript"),
        chalk.italic.greenBright.bold("(c). npm add typescript -g"),
      ],
    correct:chalk.italic.cyanBright.bold("(b). npm install -g typescript")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(6). What will be the result of the following TypeScript\nexpression: console.log('Hello' + 'World')?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). HelloWorld"),
        chalk.italic.cyanBright.bold("(b). Hello World"),
        chalk.italic.greenBright.bold("(c). 'Hello' + 'World'"),
      ],
    correct:chalk.italic.greenBright.bold("(c). 'Hello' + 'World'")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(7). Which operator is used to concatenate string in TypeScript?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). *"),
        chalk.italic.cyanBright.bold("(b). -"),
        chalk.italic.greenBright.bold("(c). +"),
      ],
    correct:chalk.italic.greenBright.bold("(c). +")
    },
    {
    Task:  chalk.italic.cyan.bold(
        "\n(8). What does the following TypeScript expression evaluate to:\n 10 <= 5?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). True"),
        chalk.italic.cyanBright.bold("(b). False"),
        chalk.italic.greenBright.bold("(c). NaN"),
      ],
     correct:chalk.italic.cyanBright.bold("(b). False")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(9). Which operator in TypeScript is used for incrementing a value by 1?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). ++"),
        chalk.italic.cyanBright.bold("(b). --"),
        chalk.italic.greenBright.bold("(c). +="),
      ],  
    correct:chalk.italic.yellowBright.bold("(a). ++")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(10). What is the purpose of the modulus operator (%) in TypeScript?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). to perform division"),
        chalk.italic.cyanBright.bold(
          "(b). to find the remainder of a division operation"
        ),
        chalk.italic.greenBright.bold("(c). to perform multiplication"),
      ],
    correct:chalk.italic.cyanBright.bold(
        "(b). to find the remainder of a division operation"
      )  
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(11). What is the result of the expression:\n(5 > 3 && 10 > 20)?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). True"),
        chalk.italic.cyanBright.bold("(b). Error"),
        chalk.italic.greenBright.bold("(c). False"),
      ],
    correct:chalk.italic.greenBright.bold("(c). False")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(12). Which operator is used to perform exponentiation in TypeScript?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). ^"),
        chalk.italic.cyanBright.bold("(b). **"),
        chalk.italic.greenBright.bold("(c). %"),
      ],
    correct:chalk.italic.cyanBright.bold("(b). **")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(13). What is the result of the following TypeScript\nexpression: 10 + 5* 2?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). 25"),
        chalk.italic.cyanBright.bold("(b). 20"),
        chalk.italic.greenBright.bold("(c). 30"),
      ],
      correct:chalk.italic.cyanBright.bold("(b). 20")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(14). Which of the following is an arithmetic operator?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). ||"),
        chalk.italic.cyanBright.bold("(b). &&"),
        chalk.italic.greenBright.bold("(c). %"),
      ],
    correct:chalk.italic.greenBright.bold("(c). %")
    },
    {
    Task:chalk.italic.cyan.bold(
        "\n(15). What is the result of the following TypeScript\nexpression: 2**3?\n"
      ),
      choices: [
        chalk.italic.yellowBright.bold("(a). 6"),
        chalk.italic.cyanBright.bold("(b). 8"),
        chalk.italic.greenBright.bold("(c). 16"),
      ],
      correct:chalk.italic.cyanBright.bold("(b). 8")
    },
]

async function startQuiz(){
    console.log(chalk.italic.blueBright.bold(`
      █████   █    ██  ██▓▒███████▒
    ▒██▓  ██▒ ██  ▓██▒▓██▒▒ ▒ ▒ ▄▀░
    ▒██▒  ██░▓██  ▒██░▒██▒░ ▒ ▄▀▒░ 
    ░██  █▀ ░▓▓█  ░██░░██░  ▄▀▒   ░
    ░▒███▒█▄ ▒▒█████▓ ░██░▒███████▒
    ░░ ▒▒░ ▒ ░▒▓▒ ▒ ▒ ░▓  ░▒▒ ▓░▒░▒
     ░ ▒░  ░ ░░▒░ ░ ░  ▒ ░░░▒ ▒ ░ ▒
       ░   ░  ░░░ ░ ░  ▒ ░░ ░ ░ ░ ░
        ░       ░      ░    ░ ░    
                          ░        `))
    let score = 0;

    for (let query of quiz){
        let {answer} = await inquirer.prompt({
            name:"answer",
            type:"list",
            message:(`\n ${query.Task}\n`),
            choices: query.choices
        });
        if(`answer == query.correct`){
            score++;
            console.log(chalk.italic.blueBright.bold(`\n\tCorrect!\n`))
        }
        else{
            console.log(chalk.italic.redBright.bold(`\n\tIncorrect! The correct answer is: ${query.correct}\n`))
        }
    }
    console.log(chalk.italic.yellow.bold(`\n\t#######Quiz complete#######\`n`))
    console.log(chalk.italic.cyan.bold(`\t<<<<Your score is: ${score}/${quiz.length}>>>>\n`))
}
startQuiz();