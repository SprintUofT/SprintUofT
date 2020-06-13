import React from 'react';
import {Row, Col} from 'react-grid-system';

export default function IntroPara(props){
    const isMobile = window.innerWidth <= 480;
    const mobileFontHeading = (isMobile) ? {
        // mobile
        fontSize: '13px',
        fontWeight: 'bold' 
      } : {
        fontSize: '25px',
        fontWeight: 'bold' 
      }

      const mobileFontText = (isMobile) ? {
        // mobile
        fontSize: '10px',
      } : {
        fontSize: '15px',
      }
    return(
        <div className="intro-para">
            <Row>
                <Col>
                    <div>
                        <h3 style={mobileFontHeading}> {props.heading} </h3>
                        <p  style={mobileFontText}>  {props.text} </p>
                    </div>
                </Col>
            </Row>
        </div>    
    );
}