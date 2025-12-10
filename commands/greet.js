import chalk from "chalk";
import { intro, outro, text, select } from "@clack/prompts";

export default function registerGreetCommand(program) {
    program
        .command("greet [name]")
        .description("Greet a user")
        .action(async (name) => {
            intro("Greeting Program");

            if (!name) {
                name = await text({
                    message: "What is your name?",
                    placeholder: "Your name",
                });
            }

            const color = await select({
                message: "Choose text color:",
                options: [
                    { value: "red", label: "Red" },
                    { value: "green", label: "Green" },
                    { value: "yellow", label: "Yellow" },
                    { value: "blue", label: "Blue" },
                    { value: "magenta", label: "Magenta" }
                ]
            });

            console.log(chalk[color](`Hello, ${name}!`));
            outro("Done");
        });
}
