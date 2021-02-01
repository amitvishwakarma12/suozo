import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'

ReactDOM.render(
  <React.StrictMode>
    <Favicon url="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Information_icon.svg/768px-Information_icon.svg.png" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
