import React from 'react';
import ReactDOM from 'react-dom';
import Root from './ui/components/Root/Root';
import Debugger from './ui/components/Debugger/Debugger';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
ReactDOM.render(<Debugger />, document.getElementById('debugger'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
