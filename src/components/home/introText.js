import React from 'react';
import {Container} from 'react-grid-system';
import IntroPara from './introPara';

export default function introText(){
    return(
        <Container>
            <IntroPara 
                heading="Our Vision"
                text="To foster a tech community at the University of Toronto 
                that creates proficient and competitive candidates for the
                tech industry."
            />
            <IntroPara 
                heading="Our Mission"
                text="To accelerate student tech careers in Product Management,
                Software Engineering, and UI/UX Design through keynote tech talks,
                mentored events, and information sessions."
            />
            <IntroPara 
                heading="Our Story"
                text="We're a dedicated team of students who strive to reach our
                highest potential in the tech industry! We believe that anyone can
                break into a tech career with exposure to the right resources and
                network."
            />

        </Container>
    );
}