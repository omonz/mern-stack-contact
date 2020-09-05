import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, FILTER_CONTACT, CLEAR_FILTER } from './../types';

const ContactState = props => {
    const initialState = {
        contacts : [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jilljohnson@gmail.com",
                phone: "+2223-39923-2393",
                type: "personal"
            },
            {
                id: 2,
                name: "Jill Johnson",
                email: "jilljohnson@gmail.com",
                phone: "+2223-39923-2393",
                type: "personal"
            },
            {
                id: 3,
                name: "Jill Johnson",
                email: "jilljohnson@gmail.com",
                phone: "+2223-39923-2393",
                type: "professional"
            }
        ]
    };

    /**
     * state here allows us to access anything in the state
     * and dispatch allows us to dispatch object to the use reducer
     */
    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact

    //Delete Contact

    //Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contact

    //Clear Filter
    
    return (
        <ContactContext.Provider 
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;