#!/usr/bin/env node

const program = require("commander");

program.version("1.0.0").description("Laravel, SWagger, Angular Rapid Maker");

program
  .command("init", "Initialize a project folder")
  .command("api", "Operate on APIs: create/delete")
  .parse(process.argv);
