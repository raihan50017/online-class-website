import React from 'react';
import './App.css';
import './asset/css/Bootstrap.min.css';
import Header from './components/header/Header';
import Course from './components/pages/coursePage/Course';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Course></Course>
    </div>
  );
}

export default App;
