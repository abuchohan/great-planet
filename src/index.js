import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fullpage from './components/Fullpage/Fullpage.jsx';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import LoadingBar from './components/LoadingBar/LoadingBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <Header />
    <LoadingBar />
    <Fullpage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
