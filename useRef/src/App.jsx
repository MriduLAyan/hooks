import { useState, useRef, useEffect, Alert } from 'react'
import './App.css'

function App() {

  // useRef is a react hooks that allow us to create mutable variables, which will not re-render the component.
  // useRef is also used for accessing DOM elements

  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current + 1; // we need count value for this I use count.current.
  })

  return (
    <>

    <button onClick={() => setValue(prev => prev - 1)}>-1</button>
    <h1>{value}</h1>
    <button onClick={() => setValue(prev => prev + 1)}>+1</button>
    <h2>Render Count : {count.current}</h2>
      
    </>
  )


  // useRef use for DOM element :

  // const inputElement = useRef();

  // const btnClicked = () => {
  //   console.log(inputElement.current.value);
  //   alert('text send')
  // }
  // return(
  //   <>
  //     <input type="text"  ref={inputElement}/>
  //     <button onClick={btnClicked}>click Here</button>
  //   </>
  // )
 }

export default App
