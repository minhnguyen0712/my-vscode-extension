import * as vscode from "vscode";
import { helloWorld, askQuestion } from "./commands";

const cats = {
  "Coding Cat": "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  "Compiling Cat": "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
};

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "visualtodo" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("visualtodo.helloWorld", helloWorld)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("visualtodo.askQuestion", askQuestion)
  );

  vscode.commands.registerCommand("visualtodo.openSession", () => {
    const panel = vscode.window.createWebviewPanel(
      "openSession",
      "Webview Panel",
      vscode.ViewColumn.One,
      {}
    );

    panel.webview.html = getWebviewContent("Coding Cat");
  });
}

function getWebviewContent(cat: keyof typeof cats) {
  return `
	<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webview panel</title>
</head>
<body>
    <img src="${cats[cat]}" width="300" />
</body>
</html>`;
}

// this method is called when your extension is deactivated
export function deactivate() {}
