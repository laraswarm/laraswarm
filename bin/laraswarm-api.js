const program = require("commander");
const inquirer = require("inquirer");

program.version("1.0.0");

program
  .command("create [name]")
  .description("Create a new generated models/api/angular component")
  .alias("c")
  .action(name => {
    console.log();
  });

program.parse(process.argv);
