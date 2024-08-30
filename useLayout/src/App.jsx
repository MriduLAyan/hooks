import { useEffect, useLayoutEffect } from 'react';
import './App.css';

function App() {
  // useLayoutEffect works similarly to useEffect, but it is called before the user interface gets mounted.
  // useEffect gets called after printing the DOM elements. UseLayoutEffect gets called before printing the DOM element.

  useEffect(() => {
    console.log('Message from useEffect');
  }, []);

  useLayoutEffect(() => {
    console.log('Message from useLayoutEffect');
  }, []);

  return (
    <>
      <h2> Test Message </h2>

      {Array(200) // this array is created for experiment that which function render firstly 
        .fill('')
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </>
  );
}

export default App;
