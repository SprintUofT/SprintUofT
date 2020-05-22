import React from 'react';

export default function ContactList(props) {

    return (
    <ul className="contact-list">
        <li>
            <a href={props.facebook}>
            <img src={require('../icons/Facebook_Logo.svg')} alt="facebook"/>
            </a>
        </li>
        <li>
            <a href={props.linkedin}>
            <img src={require('../icons/LinkedIn_Logo.svg')} alt="linkedin"/>
            </a>
        </li>
        <li>
            <a href={props.email}>
            <img src={require('../icons/Email_Logo.svg')} alt="email"/>
            </a>
        </li>
    </ul>
    );
}