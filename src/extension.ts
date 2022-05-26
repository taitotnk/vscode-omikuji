// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("vscode-omikuji.omikuji", async () => {
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

      const name = await vscode.window.showInputBox({
        title: "あなたの名前は？",
      });

      if (name !== undefined) {
        vscode.window.showInformationMessage(
          `${name}さんの運勢は${omikujiResult}です！`
        );
      }
    })
  );

  const button = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    0
  );
  button.command = "vscode-omikuji.omikuji";
  button.text = "おみくじを引く";
  context.subscriptions.push(button);
  button.show();
}

// this method is called when your extension is deactivated
export function deactivate() {}
