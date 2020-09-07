import React, { Fragment, useContext } from 'react';
import flipMove from 'react-flip-move';
import ContactContext from './../../context/contact/contactContext';
import ContactItem from './ContactItem';

export const Contacts = () => {
    const contactContext = useContext(ContactContext);
    const { contacts, filtered } = contactContext;
    return (
      <Fragment>
        <flipMove>
          {filtered !== null
            ? filtered.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
              ))
            : contacts.map((contact) => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
        </flipMove>
      </Fragment>
    );
}
