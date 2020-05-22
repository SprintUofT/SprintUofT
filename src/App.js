import React from 'react';
import Text from './components/home/introText';
import {Container, Row, Col} from 'react-grid-system';
import './App.css';
import ContactList from './components/contactList';

export default function App() {
  const isMobile = window.innerWidth <= 480;

  const pinkCloudStyle = (!isMobile) ? 
    {
      width: '100%', 
      height: '100%', 
      position: 'absolute',
      bottom: '-5%',
      left: '-20%'
    }:
    {
      width: '100%', 
      height: '100%',
      marginLeft: '-20%'
    };

  const blueCloudStyle = (isMobile) ? {
    width: '60%', 
    height: 'auto',
    position: 'absolute',
    right: '-15%',
    top: '12.5%'
  } : {
    width: '50%', 
    height: '50%',
    position: 'absolute',
    top: '-10%',
    right: '-10%'
  }

  const pinkCloud = (
    <img  src={require('./icons/Pink_Cloud.svg')} 
          alt="board icon" 
          style={pinkCloudStyle}/>
  );

  const botRow = (isMobile) ? (
    //mobile
    <Row>
      <Col md={5}>  <Text/> </Col>
      <Col md={7}>  {pinkCloud} </Col>
    </Row>
  ):(
    //desktop
    <Row>
      <Col md={6}>  {pinkCloud} </Col>
      <Col md={6}>  <Text/> </Col>
    </Row>
  );

  return (
    <div style={{overflow: 'hidden'}}>
      <Container>
        <Row>
          <Col md={8}>
            {/* Logo and Slogan */}
            <img id="logo" src={require('./icons/Logo.svg')} alt="logo"/>
            <h1 className="slogan">
              Accelerating Student Tech Careers
            </h1>
            <ContactList 
              facebook="https://www.google.ca"
              linkedin="https://www.google.ca"
              email="https://www.google.ca" />
          </Col>
          {/* <Col md={4}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '50%'
            }}>
              <img src={require('./icons/Blue_Cloud.svg')} alt="working icon" style={blueCloudStyle} />
            </div>
          </Col> */}
        </Row>
        <img src={require('./icons/Blue_Cloud.svg')} alt="working icon" style={blueCloudStyle} />
        {botRow}
      </Container>
    </div>
  );
}