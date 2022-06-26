// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [names, setNames] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=>setNames(data))
  },[])
  
  // var names = [{name: 'Adul', age: 25}, {name: 'Jolla', age: 75}, {name: 'Uddin', age: 29}, {name: 'Sunt', age: 45}]
  return (
    <div className="App">
      
      <MovieCounter></MovieCounter>
      {
        names.map(nm => <MyName name={nm.name} key={nm.id} website = {nm.website}></MyName>)
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
      <h1>Name: {props.name}</h1>
      <h3>Website: {props.website} </h3>
    </div>
  )
}

export default App;
