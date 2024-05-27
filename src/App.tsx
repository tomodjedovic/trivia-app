import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import TriviaApp from './components/TriviaApp';

function App() {
  return (
    <BrowserRouter>
    <h1><Link to="/">Trivia-App</Link></h1>
    <Routes>
      <Route path='/' element={<TriviaApp/>}/>

    </Routes>
    
    </BrowserRouter>

    
    )
   
};

export default App;
