import React from 'react';
import './App.css';
import OpretKonto from "./components/OpretKonto/OpretKonto";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <OpretKonto/>

    </div>
  );
}

export default App;
