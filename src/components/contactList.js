import React from 'react';

export default function ContactList(props) {

    return (
    <ul className="contact-list">
        <li>
            <a href={props.facebook} target="_blank" rel="noopener noreferrer">
            <img src={require('../Icons/Facebook_Logo.svg')} alt="facebook"/>
            </a>
        </li>
        <li>
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={require('../Icons/LinkedIn_Logo.svg')} alt="linkedin"/>
            </a>
        </li>
        <li>
            <a href={props.email} target="_blank" rel="noopener noreferrer">
            <img src={require('../Icons/Email_Logo.svg')} alt="email"/>
            </a>
        </li>
    </ul>
    );
}