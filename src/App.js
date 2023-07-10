import logo from './logo.svg';
import './App.css';
import Idcard from './Idcard';
import Idcards from './Idcards';
// import {Container, Card, Row, Col, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App style={ {text-align:'center'}} ">
      <h1 class="bg-success text-light container "> Welcome to IDCards App </h1>
      {/* <Idcard/> */}
      <Idcards/>
    </div>
  );
}

export default App;
