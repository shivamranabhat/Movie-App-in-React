import {useState} from 'react';
import './App.css';

//creating components
// const Person = (props) => {
//  return(
//   <>
//   <h1>Name: {props.name}</h1>
//   <h2>lastname: {props.lastname}</h2>
//   <h2>Age: {props.age}</h2>
//   </>
//  )
// }

// const App = () => {
//   const isLogged = false;
//     return (
//       <div className="App">
//         {/* //using components */}
//         <Person name='John' lastname='Doe' age={20}/>
//       </div>
//     );
// }

//Types of hooks
//use of setter function to increment and decrement value whose initial value is 0
const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className = 'App'>
      <button onClick={()=> setCounter((prevCount)=>prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((nextCounter)=>nextCounter+1)}>+</button>
      </div>

  )
}
export default App;
