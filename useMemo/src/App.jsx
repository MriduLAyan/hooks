import { useMemo, useState } from 'react'
import './App.css'

function App() {

  // The React useMemo hooks return a memoized value.(It's like caching a value so that it doesn't need to be recalculated)
  // The useMemo hook only run when one of its dependencies gets updated
  // This can improve the performance of the application. There is one more hook in react to improve performance, that is useCallback hook.
  
  // The useMemo and useCallback hooks are similar. The main difference is,
  // -> useMemo returns a memoized value,
  // -> useCallback returns a memoized function.

  const [number, setNumber] = useState(0)
  const [counter, setCounter] = useState(0)

  function cubeNum (num){
    console.log('Calculation done!');
    return Math.pow(num, 3);
    
  }

  const result = useMemo(()=>cubeNum(number), [number]);

  return (
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>Cube of the Number = {result}</h1>
      <button onClick={()=> {setCounter(counter+1)}} >Counter++</button>
      <h1>Counter = {counter}</h1>
    </>
  )
}

export default App
