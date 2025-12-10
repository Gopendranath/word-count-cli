#!/usr/bin/env node

import { Command } from "commander";
import registerCountCommand from "./commands/count.js";
import registerGreetCommand from "./commands/greet.js";
import registerAskCommand from "./commands/ask.js";

const program = new Command();

program
    .name("wd-cli")
    .version("1.0.0")
    .description("My Modular CLI Tool");

// Attach commands
registerCountCommand(program);
registerGreetCommand(program);
registerAskCommand(program);

program.parse(process.argv);
