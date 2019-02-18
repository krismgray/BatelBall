import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
  document.getElementById('root')
);
