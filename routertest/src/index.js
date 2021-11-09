import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter}from"react-router-dom";

ReactDOM.render(
  <React.BrowserRouter>
    <App />
  </React.BrowserRouter>,
  document.getElementById('root')
);

