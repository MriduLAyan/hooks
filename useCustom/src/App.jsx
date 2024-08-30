// import { useEffect, useState } from 'react'
import './App.css'
import useLocalStorage from './cstHooks/useLocalStorage'

function App() {
  // React allows us to create our own hook which is know as custom hook.
  // const [name, setName] = useState(
  //   localStorage.getItem('username') ?  // ? ar ager je element ache seta dia bujhai kon jaigai search debe
  //   localStorage.getItem('username') : '' // ai lien e : ar ager element hoilo ki search debe jodi pai taile print korbe nah pele '' ar moddhe ja thakbe tai print korbe
  // );

  // if we need to use setItem or getItem for multiple time than we must use useCustom hook.

  // useEffect(()=>{
  //   localStorage.setItem('username', name)
  // }, [name])


  const [name, setName] = useLocalStorage('username', '')
  const [id, setId] = useLocalStorage('userId', '')

  return (
    <>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} />

      <h2>Hello {name}!</h2>

      <input type="Number" placeholder='Enter your ID' value={id} onChange={(e)=> setId(e.target.value)} />

      <h2>Your id: {id}</h2>
    </>
  )
}

export default App
