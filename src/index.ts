import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './Main';

export class App {
	private _appName: string = 'Luke in the Cloud';

	constructor() {
		console.log('Nice');
		this.render();
	}

	private render(): void {
		ReactDOM.render(React.createElement(Main, {app: this}), document.getElementById('root'));
	}

	public get appName(): string {
		return this._appName;
	}
}

new App();
