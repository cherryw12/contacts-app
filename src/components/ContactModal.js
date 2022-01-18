import React from 'react';
import user_icon from '../images/user_icon.svg';
import './ContactModal.css';


const ContactModal = ({data, setModalVisible}) => {
    const {name, username, email, phone, address, website, company} = data;

    return (
        <div className="popup">
            <div className="modal-content">
                <div className="close" onClick={() => {setModalVisible(false)}}>&times;</div>

                <div className="header-box">
                    <img className="avatar" src={user_icon} alt="user_icon"/>
                    <div className="m-name">{name}</div>
                    <div className="m-username">@{username}</div>
                </div>

                <div className="fields">
                    <div className="modal field email">EMAIL</div>
                    <div className="modal data email">{email}</div>
                    <a className="button" href={`mailto:${email}`}>Send Mail</a>

                    <div className="modal field phone">PHONE</div>
                    <div className="modal data phone">{phone}</div>

                    <div className="modal field address">ADDRESS</div>
                    <div className="modal data address">{address.suite}, {address.street}, {address.city}</div>

                    <div className="modal field website">WEBSITE</div>
                    <p><a className= "modal data website" href="modal data website">{website}</a></p>

                    <div className="modal field company">COMPANY</div>
                    <div className="modal data company">{company.name}</div>
                    <div className="modal data catchphrase">"{company.catchPhrase}"</div>

                </div>
                
            </div>

        </div>
        
    );
}

export default ContactModal;