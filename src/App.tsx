import React from 'react';
import logo from './logo.svg';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';

//приложение
function App() {
  return (
    <div className="App">
      <Preloader></Preloader>
    </div>
  );
}

export default App;
