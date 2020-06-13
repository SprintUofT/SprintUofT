import React from 'react';
import {Container} from 'react-grid-system';
import IntroPara from './introPara';

export default function introText(){
    return(
        <div className="intro-text">
            <Container>
                <IntroPara 
                    heading="Our Vision"
                    text="To foster a positive student-tech community at the University of Toronto."
                />
                <IntroPara 
                    heading="Our Mission"
                    text="To advance student careers in tech at the University of Toronto through 
                    tech-talks, panel discussions, industry interviews and other events. Our organization 
                    aims to educate students on various careers in Software Engineering, Product Management, 
                    UI/UX Design, & Data Science."
                />
                <IntroPara 
                    heading="Our Story"
                    text="We’re a dedicated team of students striving to make an impact on the University 
                    of Toronto’s tech landscape! Our team has worked at companies such as Google, IBM, 
                    Qualcomm, Zynga, RBC, BlackBerry & more! We’ve got the insight, network, and resources 
                    necessary to give you an inside scoop on the tech industry. "
                />

            </Container>
        </div>
    );
}