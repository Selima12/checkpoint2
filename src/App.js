import React from 'react';
import imageInSrc from './logo.svg';
import "./style.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <div style ={{
        border: 'solid 1px black',
        maxWidth :"100vw"}}
        > 
        <h1 className="title red ">My title</h1>
        <br/>
        <img src={imageInSrc} />

        <br/>
        <img src="/imageInPublic.png"/>

      
        </div>
        </div>

      
   
  );
}

export default App;
