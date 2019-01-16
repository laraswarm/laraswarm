const program = require("commander");
const inquirer = require("inquirer");
const nodepath = require("path");
const fs = require("fs");

program
  .version("1.0.0")
  .description("Initialize a project folder, default path is current directory")
  .arguments("[path]")
  .action((path) => {
    path = path || '.';
    path = nodepath.resolve(path);

    fs.mkdirSync(path, {
      recursive: true
    });

    const questions = [];
    questions.push({
      name: 'name',
      message: 'Project\'s name',
      default: nodepath.basename(path)
    });
    questions.push({
      name: "description",
      message: "Project's description"
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
      message: "Application style",
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


