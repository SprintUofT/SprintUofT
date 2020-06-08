import React from 'react';
import {Container} from 'react-grid-system';
import IntroPara from './introPara';

export default function introText(){
    return(
        <Container>
            <IntroPara 
                heading="Our Vision"
                text="To foster a positive student-tech community 
                at the University of Toronto that creates proficient candidates for the tech industry.
                "
            />
            <IntroPara 
                heading="Our Mission"
                text="To advance student careers in tech at the University of Toronto through tech-talks, 
                panel discussions, industry interviews and other events. Our organization aims to educate 
                students on various careers in Software Engineering, Product Management, UI/UX Design, & Data Science."
            />
            <IntroPara 
                heading="Our Story"
                text="We’re a dedicated team of students from the University of Toronto who strive to 
                help you reach your highest potential in the tech industry! Our team has worked at companies 
                such as Google, IBM, Qualcomm, Zynga, BlackBerry & more! We’ve got plenty of insights, 
                the network, and the resources required to give you an inside scoop on the tech industry."
            />

        </Container>
    );
}