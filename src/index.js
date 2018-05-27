import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//將app原件掛載到id=root的html上
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
