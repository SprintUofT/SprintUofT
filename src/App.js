import React from 'react';
// import Logo from './Icons/Logo.svg';
// import BlueCloud from './Icons/Blue_Cloud.svg';
// import LinkedIn from './Icons/LinkedIn_Logo.svg';
// import Facebook from './Icons/Facebook_Logo.svg';
// import Email from './Icons/Email_Logo.svg';
// import PinkCloud from './Icons/Pink_Cloud.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Text from './components/home/introText';
import {Container, Row, Col} from 'react-grid-system';
import './App.css';
import ContactList from './components/contactList';

export default function App() {
  const isMobile = window.innerWidth <= 480;
  // const isLong = window.innerHeight> 820;

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
    // mobile
    width: '50%', 
    height: 'auto',
    position: 'absolute',
    right: '-10%',
    top: '0%'
  } : {
    width: '60%', 
    height: '60%',
    position: 'absolute',
    top: '-20%',
    right: '-10%'
  }

  const pinkCloud = (
    <img  src={require('./Icons/Pink_Cloud.svg')} 
          alt="board icon" 
          style={pinkCloudStyle}/>
  );

  const botRow = (isMobile) ? (
    //mobile
    <Row>
      <Col md={5}>  <Text/> </Col>
      
      {/* <Col md={7}>  {pinkCloud} </Col> */}
    </Row>
  ):(
    //desktop
    <Row>
      <Col md={6}>  {pinkCloud} </Col>
      <Col md={6}>  <Text/> </Col>
    </Row>
  );
  const sloganFormat = (isMobile) ? {
    // mobile
    fontSize: '25px'
  } : {
    fontSize: '50px'
  }

  return (
    <div className="App" style={{overflow: 'hidden'}}>    
        <Container>
         
              <Row>

                <img id="logo" src={require('./Icons/Logo.png')} alt="logo"/>
              </Row>
              
              <Row>
              <Col sm={7}>
                <div className="title">
                  <h1 className="slogan" style={sloganFormat}>
                    Accelerating Student 
                  </h1>
                  <h1 className="slogan" style={sloganFormat}>
                    Careers in Tech
                  </h1>

                    <ContactList
                      facebook="https://www.facebook.com/SprintUofT/"
                      linkedin="https://www.google.ca"
                      email="mailto:sprintuoft@gmail.com" />
                </div>                
              </Col>
          </Row>
          
          <img src={require('./Icons/Blue_Cloud.svg')} alt="working icon" style={blueCloudStyle} />
          {botRow}
        </Container>
      </div>
    );
}
