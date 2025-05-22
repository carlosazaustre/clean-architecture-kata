import * as readline from "readline";
import { stdin, stdout } from "process";
import { TerminalView } from "./users/presentation/TerminalView";

async function main() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  const view = new TerminalView(rl);

  view.start();
}

main();
