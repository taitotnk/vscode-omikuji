// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand("vscode-omikuji.omikuji", () => {
    const omikujiCandidates = [
      "大吉",
      "吉",
      "中吉",
      "小吉",
      "末吉",
      "凶",
      "大凶",
    ];
    const omikujiResult =
      omikujiCandidates[Math.floor(Math.random() * omikujiCandidates.length)];

    vscode.window.showInformationMessage(
      `あなたの運勢は${omikujiResult}です！`
    );
  });
}

// this method is called when your extension is deactivated
export function deactivate() {}
