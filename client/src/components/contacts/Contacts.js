import React, { Fragment, useContext, useEffect } from 'react';
// import flipMove from 'react-flip-move';
import ContactContext from './../../context/contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from './../layouts/Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Contacts = () => {

  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContact, loading } = contactContext;

  useEffect(() => {
     setTimeout(() => getContact(), 0);

    //eslint-disable-next-line
  }, []);

    if (contacts !== null && contacts.length === 0 && !loading){
      return <h4 className="text-center">Please Add Contact</h4>;
    }

    return (
      <Fragment>
        {contacts !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    className="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))
              : contacts.map((contact) => (
                  <CSSTransition
                    key={contact._id}
                    timeout={500}
                    className="item"
                  >
                    <ContactItem contact={contact} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
}