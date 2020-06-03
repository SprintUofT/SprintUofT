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
    top: '-10%'
  } : {
    width: '60%', 
    height: '60%',
    position: 'absolute',
    top: '-10%',
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

  const nameFormat = (isMobile) ? {
    // mobile
    fontSize: '25px',
    fontWeight: 'bolder'
  } : {
    fontSize: '50px',
    fontWeight: 'bolder'
  }

  return (
    <div className="App" style={{overflow: 'hidden'}}>    
            {/* <Row>
              <Col sm={4}><img src={Logo} style={{width: "100%", height:"auto"}} alt=""/><h1>Accelerating Student Tech Careers</h1></Col>
              <Col sm={8}><img src={BlueCloud} style={{width: "100%", height:"auto"}} alt=""/></Col>
            </Row>
            <Row>
              <Col sm={4}><img src ={Facebook} alt=""></img><img src ={LinkedIn} alt=""></img><img src ={Email} alt=""></img></Col>
            </Row>
            <Row>
              <Col sm={6}><img src={PinkCloud} style={{width: "100%", height:"auto"}}  alt=""/></Col>
            </Row> */}
      

      {/* <div style={{overflow: 'hidden'}}> */}
        <Container>
         
            {/* <Col md={8}> */}
              {/* Logo and Slogan */}
              <Row>
                <Col sm={3}>
                  <img id="logo" src={require('./Icons/Logo.svg')} alt="logo"/>
                </Col>
                <Col sm={1}>
                </Col>
                <Col sm={6} style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                  <h1 className="name" style={nameFormat}>SprintUofT</h1>
                </Col>
              </Row>
              
              <Row>
              <Col md={8}>
              <h1 className="slogan" style={sloganFormat}>
                Accelerating Student 
              </h1>
              <h1 className="slogan" style={sloganFormat}>
                Tech Careers
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
                <img src={require('./Icons/Blue_Cloud.svg')} alt="working icon" style={blueCloudStyle} />
              </div>
            </Col> */}
          </Row>
          <img src={require('./Icons/Blue_Cloud.svg')} alt="working icon" style={blueCloudStyle} />
          {botRow}
        </Container>
      </div>
    );
}
