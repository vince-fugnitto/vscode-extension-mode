import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-extension-mode.echoMode', () => {
        const mode = vscode.ExtensionMode[context.extensionMode];
        vscode.window.showInformationMessage(`'ExtensionMode' is '${mode}'`);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
