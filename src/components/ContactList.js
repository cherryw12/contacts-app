import React, {useState} from 'react';
import ContactCard from './ContactCard';
import './ContactList.css';
import ContactModal from './ContactModal'

const ContactList = ({contacts}) => {

    const [user, setUser] = useState({})

    // modal state for visibility
    const [modalVisible, setModalVisible] = useState(false)

    // show modal when a contact card is clicked
    function showDetailedUser(user) {
        setUser(user);
        setModalVisible(true);
    }

    const renderContactList = contacts.map((contact_list) => {
        return <ContactCard showDetailedUser={showDetailedUser} contacts={contact_list}></ContactCard>;
    });

    return <>
        <div className="listContainer">
            <div className="allContacts">{renderContactList}</div>
        </div>

        {modalVisible && <ContactModal data={user} visible={modalVisible} setModalVisible={setModalVisible} ></ContactModal>}
    
    </>;
};

export default ContactList;