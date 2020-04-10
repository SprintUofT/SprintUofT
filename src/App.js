import React from 'react';
import Logo from './Icons/Logo.svg';
import BlueCloud from './Icons/Blue_Cloud.svg';
import LinkedIn from './Icons/LinkedIn_Logo.svg';
import Facebook from './Icons/Facebook_Logo.svg';
import Email from './Icons/Email_Logo.svg';
import PinkCloud from './Icons/Pink_Cloud.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Picture } from 'react-responsive-picture';

function App() {
  return (
    <div className="App">     
            <Row>
              <Col sm={4}><img src={Logo} style={{width: "100%", height:"auto"}}/><h1>Accelerating Student Tech Careers</h1></Col>
              <Col sm={8}><img src={BlueCloud} style={{width: "100%", height:"auto"}}/></Col>
            </Row>
            <Row>
              <Col sm={4}><img src ={Facebook}></img><img src ={LinkedIn}></img><img src ={Email}></img></Col>
            </Row>
            <Row>
              <Col sm={6}><img src={PinkCloud} style={{width: "100%", height:"auto"}}/></Col>
            </Row>
    </div>
  );
}

export default App;
