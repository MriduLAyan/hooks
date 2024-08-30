import { useReducer } from 'react';
import './App.css';

function App() {
  // useReducer is similar to useState, but instead of providing state & setter function. It provides state and dispatch function
  // the useReducer Hook accepts two arguments (1) Reducer function and (2) Initial state. and returns Current state and Dispatch method.
  // The reducer function specifies how the state gets updated.

  const initialState = { count: 0 };

  const reducer = (state, actioin) => {
    switch (actioin.type) {
      case 'increase':
        {
          return { count: state.count + 1 };
        }
        break;

      case 'decrease':
        {
          return { count: state.count - 1 };
        }
        break;

      case 'input':
        {
          return { count: actioin.payload };
        }
        break;

      default: {
        return state;
      }
    }
  }; // reducer function accept 2 peramiter (1) current State & (2) action{action ar moddhe bivinno sorto likha hoi}

  const [state, dispatch] = useReducer(reducer, initialState); // useReducer accept 2 arguments (1) Reducer function (2) difault state.
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'increase' });
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          dispatch({ type: 'decrease' });
        }}
      >
        decrease
      </button>

      <br />

      <input
        value={state.count}
        onChange={(e) => {
          dispatch({ type: 'input', payload: Number(e.target.value) });
        }}
        type="number"
      />
    </>
  );
}

export default App;
