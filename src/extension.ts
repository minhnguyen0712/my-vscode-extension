import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "visualtodo" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("visualtodo.helloWorld", () => {
      vscode.window.showInformationMessage("Hello World from VisualTodo!!!");
    })
  );

  vscode.commands.registerCommand("visualtodo.askQuestion", async () => {
    const answer = await vscode.window.showInformationMessage(
      "How was your day",
      "good",
      "bad"
    );
    if (answer === "bad") {
      vscode.window.showInformationMessage("Sorry to hear!! Cheer up!!");
    } else if (answer === "good") {
      vscode.window.showInformationMessage("Keep up the spirits!!");
    }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
