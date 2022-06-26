// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  var names = [{name: 'Adul', age: 25}, {name: 'Jolla', age: 75}, {name: 'Uddin', age: 29}, {name: 'Sunt', age: 45}]
  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>
      {
        names.map(nm => <MyName name={nm.name} age = {nm.age}></MyName>)
      }
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
      </header>
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
      <h3>Age {props.age} years.</h3>
    </div>
  )
}

export default App;
