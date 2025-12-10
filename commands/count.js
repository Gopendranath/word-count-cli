import chalk from "chalk";
import {
    intro,
    outro,
    select,
    text,
    spinner
} from "@clack/prompts";

import { listFiles, isExistingFile, readTextFile } from "../utils/file.js";
import { trimQuotes, countWords, wordlist } from "../utils/text.js";

export default function registerCountCommand(program) {
    program
        .command("count [inputs...]")
        .description("Count words from files or raw text")
        .action(async (inputs) => {
            intro("Word Counter");

            let itemsToProcess = [];

            // If inputs exist (text or file paths)
            if (inputs && inputs.length > 0) {
                itemsToProcess = inputs.map(trimQuotes);
            } else {
                const files = await listFiles(process.cwd());

                files.push({ label: "Custom file path...", value: "__custom__" });
                files.push({ label: "Enter raw text...", value: "__rawtext__" });

                const selected = await select({
                    message: "Choose a file or input type:",
                    options: files
                });

                if (selected === "__custom__") {
                    const customPath = await text({ message: "Enter file path:" });
                    itemsToProcess = [trimQuotes(customPath)];
                } else if (selected === "__rawtext__") {
                    const raw = await text({ message: "Enter raw text:" });
                    itemsToProcess = [raw];
                } else {
                    itemsToProcess = [selected];
                }
            }

            const s = spinner();
            s.start("Counting words...");

            let results = [];

            for (const item of itemsToProcess) {
                const cleaned = trimQuotes(item);

                if (await isExistingFile(cleaned)) {
                    const content = await readTextFile(cleaned);
                    results.push({
                        type: "file",
                        source: cleaned,
                        words: countWords(content),
                        wordsList: wordlist(content)
                    });
                } else {
                    results.push({
                        type: "text",
                        source: cleaned,
                        words: countWords(cleaned),
                        wordsList: wordlist(cleaned)
                    });
                }
            }

            s.stop("Done.");

            console.log("\nResults:");
            for (const r of results) {
                if (r.error) {
                    console.log(chalk.red(`✖ ERROR: ${r.error}`));
                } else {
                    const type = r.type === "file" ? "File" : "Text";
                    console.log(chalk.green(`✔ ${type}: "${r.source}" → ${r.words} words \n Words List: ${JSON.stringify(r.wordsList)}`));
                }
            }

            outro("Completed");
        });
}
