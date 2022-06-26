import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var names = ['Adul', 'jolla', 'Uddin', 'suny']
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
      </header>
      <MovieCounter></MovieCounter>
      {
        names.map(nm => <MyName name={nm}></MyName>)
      }
    </div>
  );
}
function MovieCounter(){
  var [count, setCount] = useState(1)
  const handelClick = () => setCount(count + 1);
  return (
    <div>
      <h3>Number of Movies: {count}</h3>
      <button onClick={handelClick}>Add Movies</button>
      <DisplayMovie movies ={count}></DisplayMovie>
      <DisplayMovie movies ={count+10}></DisplayMovie>
    </div>
  )
}
function DisplayMovie(props){
  return <h4>Movies I saw : {props.movies}</h4>
}

function MyName (props){
  const nameStyle = {
    border : '2px solid blue',
    margin : '20px',
    // padding : '50px',
    // backgroundColor : 'black'
  }
  return (
    <div style={nameStyle}>
      <h1>The man {props.name}</h1>
      <h3>hero</h3>
    </div>
  )
}

export default App;
