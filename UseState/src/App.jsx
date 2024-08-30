import './App.css';
import { useState } from 'react';

function App() {
  // UseState is a react hook. which create an "State variable ". Which helps us to track state in components & updates the user interface when state changes.

  // -- useState hooks use single time

  // const [counter, setCounter] = useState('Red');
  // const [btn, setBtn] = useState('Blue');

  // const changeColor = () => {
  //   if (counter == 'Red') {
  //     setCounter('Blue');
  //     setBtn('Red');
  //   } else {
  //     setCounter('Red');
  //     setBtn('Blue');
  //   }
  // };

  // return (
  //   <>
  //     <h2>My favourite color is color {counter}!</h2>
  //     <button onClick={changeColor}>{btn}</button>
  //   </>
  // );

  // -- useState hooks use multiple time

  //  if you need to use multiple useSate hooks than you can use object like below code.

  const [car, setCar] = useState({
    brand: 'BMW',
    model: 'X1 SUV',
    year: '2024',
    color: 'Black',
  });

  const [btn, setBtn] = useState('Blue');

  const changeModel = () => {
    if (car.brand === 'BMW') {
      setCar({
        brand: 'Ferrari',
        model: 'Roma',
        year: '2023',
        color: 'Blue',
      });
      setBtn('Black');
    } else {
      setCar({
        brand: 'BMW',
        model: 'X1 SUV',
        year: '2024',
        color: 'Black',
      });
      setBtn('Blue');
    }
  };

  // And if you change only perticuler parts than you can use this code:

    /* 
      const changeColor = ()=>{
        setCar ((event)=>{
          return {...event, color:"Tomato"}
          })
        }
    */

  return (
    <>
      <h1>My favourite car is {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeModel}>{btn}</button>
    </>
  );
}

export default App;
