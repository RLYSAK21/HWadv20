import React from 'react';
import Search from './components/Search';
import contacts from './components/ContactsName';

const ContactsPage = () => {
    return (
        <div className='phone'>
        <Search details={contacts}/>
     </div>
    );
};

export default ContactsPage;