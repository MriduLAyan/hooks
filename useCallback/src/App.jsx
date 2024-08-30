import { useCallback, useState } from 'react'
import Header from './components/Header';
import './App.css'

function App() {

  // UseCallback is a React Hooks that lets you cache a function defination between re-renders. It means when we use the usecallback hook, it doesn't create multiple instance of same function when re-render happens.
  // Instead of creating new instance of the function, it provides the cached function on re-render of the component.

  const [count, setCount] = useState(0);

  const newFn = useCallback(()=>{}, []); // useCallback hook recive 2 perameters 1st is a function and 2nd is a dependency.

  return (
    <>
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)} >Click Here..</button>
    </>
  )
}

export default App
