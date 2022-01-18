import React from 'react';
import user_icon from '../images/user_icon.svg';
import './ContactCard.css';

const ContactCard = ({showDetailedUser, contacts}) => {
    const {name, username} = contacts;

    return (
        <button className="person" onClick={() => {showDetailedUser(contacts)}}>
            <img className="avatar" src={user_icon} alt="user_icon"/>
            <div className="name">{name}</div>
            <div className="username">@{username}</div>
        </button>
        
    );
}

export default ContactCard;