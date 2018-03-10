import React from 'react';
import ReactDOM from 'react-dom';

import ExpensifyApp from './components/ExpensifyApp';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './scss/main.scss';

ReactDOM.render(<AppRouter />, root);