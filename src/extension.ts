import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-extension-mode.echoMode', () => {
        vscode.window.showInformationMessage(`'ExtensionMode' is ${context.extensionMode}`);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
