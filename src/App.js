import logo from './logo.svg';
import './App.css';

function App() {
  var names = ['Adul', 'jolla', 'Uddin',]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}  
      </header>
      <MyName name={names[2]}></MyName>
      <MyName name="Monoar"></MyName>
      <MyName name={names[1]}></MyName>
    </div>
  );
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
