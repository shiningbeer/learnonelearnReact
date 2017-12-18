import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './fonts/style.less';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
