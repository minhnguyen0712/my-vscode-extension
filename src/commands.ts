import * as vscode from "vscode";

export const helloWorld = () => {
  vscode.window.showInformationMessage("Hello World from VisualTodo!!!");
};

export const askQuestion = async () => {
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
};
