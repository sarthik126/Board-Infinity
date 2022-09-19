import React from 'react';
import './App.css';
import Program1 from './components/Program1';
import Program2 from './components/Program2';
import { BrowserRouter as Router } from 'react-router-dom';
import Program3 from './components/Program3';
import { useState } from 'react';

function App() {
  const [mainVal,setMainVal] = useState(0)
  return (
    <main>
      <Router>
      {(mainVal !== 0) && <button className='btn btn-success main-btn' onClick={()=>setMainVal(0)}><i className="fa-solid fa-arrow-circle-left"></i> MENU</button>}

      {(mainVal == 0) && 
        <div className='main-btns'>
      <button className='btn btn-primary' onClick={()=>setMainVal(1)}>Problem 1</button>
      <button className='btn btn-primary' onClick={()=>setMainVal(2)}>Problem 2</button>
      <button className='btn btn-primary' onClick={()=>setMainVal(3)}>Problem 3</button>
      </div>}
      
      {(mainVal === 1) && <Program1 />}
      {(mainVal === 2) && <Program2 />}
      {(mainVal === 3) && <Program3 />}
      </Router>
    </main>
  );
}

export default App;