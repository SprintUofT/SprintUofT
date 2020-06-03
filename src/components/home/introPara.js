import React from 'react';
import {Row, Col} from 'react-grid-system';

export default function IntroPara(props){
    const isMobile = window.innerWidth <= 480;
    const mobileFontHeading = (isMobile) ? {
        // mobile
        fontSize: '15px',
        fontWeight: 'bolder' 
      } : {
        fontSize: '25px',
        fontWeight: 'bolder' 
      }

      const mobileFontText = (isMobile) ? {
        // mobile
        fontSize: '13px',
      } : {
        fontSize: '16px',
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