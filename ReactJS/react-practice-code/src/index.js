import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './components/functionalComponent';
import WelcomeClass from './components/classComponent';
import Comment from './components/extractComponents';
import Clock from './state';
import reportWebVitals from './reportWebVitals';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  <Welcome text = "Mirwais"/>
  <WelcomeClass text = "Mirwais! Class based Call" />
  <Comment 
  date={comment.date}
  text={comment.text} 
  author={comment.author}
  />

  <Clock />

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
