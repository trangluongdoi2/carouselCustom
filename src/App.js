import React, { useCallback, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import ResponsiveTest from './components/ResponsiveTest';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      {/* <div>Hello world</div>
      <p1>{count}</p1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <Hero name="Tan Vinh" /> */}
      {/* <h1 style={{ textAlign: 'center' }}>Hello World</h1>
      <ResponsiveTest /> */}
      <div className="App">
        <h2>Make a carousel component using ReactJS.</h2>
        <h4>Your implementation:</h4>
        <Carousel />
      </div>
    </>
  );
}

export default App;
