import React, { Fragment, useContext, useEffect } from 'react';
// import flipMove from 'react-flip-move';
import ContactContext from './../../context/contact/contactContext';
import ContactItem from './ContactItem';

export const Contacts = () => {

  useEffect(() => {
    getContact();

    //eslint-disable-next-line
  }, []);

    const contactContext = useContext(ContactContext);
    const { contacts, filtered, getContact, loading } = contactContext;
    return (
      <Fragment>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ContactItem key={contact._id} contact={contact} />
              ))}
      </Fragment>
    );
}