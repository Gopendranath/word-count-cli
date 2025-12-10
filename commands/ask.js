import chalk from "chalk";
import { intro, outro, select } from "@clack/prompts";

export default function registerAskCommand(program) {
    program
        .command("ask")
        .description("Ask a question")
        .action(async () => {
            intro("Framework Selection");

            const tech = await select({
                message: "Pick one:",
                options: [
                    { value: "React", label: "React" },
                    { value: "Vue", label: "Vue" },
                    { value: "Angular", label: "Angular" },
                    { value: "Svelte", label: "Svelte" }
                ]
            });

            console.log(chalk.yellow(`You selected: ${tech}`));
            outro("Completed");
        });
}
