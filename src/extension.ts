import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('vscode-extension-mode.echoMode', () => {
        const mode = vscode.ExtensionMode[context.extensionMode];
        vscode.window.showInformationMessage(`vscode-extension-mode: { 'extensionMode': '${mode}' }`);
    });
    context.subscriptions.push(disposable);
}

export function deactivate() { }
