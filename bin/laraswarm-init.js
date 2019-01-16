const program = require("commander");
var inquirer = require("inquirer");

program
  .version("1.0.0")
  .usage("[path]")
  .description("Initialize a project folder, default path is current directory")
  .action(path => {
    console.log(path);
    let questions = [];
    questions.push({
      name: 'name',
      message: 'Your project\'s name',
      default: path
    });
    questions.push({
      name: "pkgmanager",
      type: "list",
      message: "Prefered package manager",
      choices: ['npm', 'yarn']
    });
    questions.push({
      name: "style",
      type: "list",
      message: "Default application style",
      choices: [
        { name: "Twitter's Bootstrap 4", value: "bootstrap" }, 
        { name: "Angular's Material", value: "material" },
      ]
    });
    inquirer.prompt(questions).then(answers => {
      console.log(answers);
    });
  });

program.parse(process.argv);


