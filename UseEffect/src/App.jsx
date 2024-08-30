import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // the useEffect hooks allow you to perform side effects in your components. some examples of side effects are
  // -- Fetching data from API
  // -- Directly updating the DOM
  // -- Timers like setTimeOut and SetInterval
  const [count, setCount] = useState(0);

 // if you render more and more time than you can use this type of useEffect code :
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setCount(count => count + 1)
  //   }, 1000)
  // })

  // but you need just one time render then you should use this type of code:

  // useEffect(()=>{
  //  setTimeout(()=>{
  //    setCount(count => count + 1)
  //  }, 1000)
  // }, []) // this code run single time 


  // And you need when change the value of variable this time your code will render then you can use this type of code :

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1)
    }, 1000)
  }, [count])

  return (
    <>
      <h1>I have rendered {count} time!</h1>
    </>
  );
}

export default App;
