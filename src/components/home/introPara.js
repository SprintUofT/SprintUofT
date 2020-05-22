import React from 'react';
import {Row, Col} from 'react-grid-system';

export default function IntroPara(props){
    // let paraStyle = {

    // };

    return(
        <div className="intro-para">
            <Row>
                <Col>
                    <div>
                        <h3> {props.heading} </h3>
                        <p> {props.text} </p>
                    </div>
                </Col>
            </Row>
        </div>    
    );
}