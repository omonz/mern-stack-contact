import React, { useReducer } from 'react';
import axios from 'axios'; 
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT, GET_CONTACT, CLEAR_CONTACT, CONTACT_ERROR, FILTER_CONTACT, CLEAR_FILTER, CLEAR_ERRORS } from './../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading: true,
  };

  /**
   * state here allows us to access anything in the state
   * and dispatch allows us to dispatch object to the use reducer
   */
  const [state, dispatch] = useReducer(contactReducer, initialState);

  //fetch user contact
  const getContact = async () => {
    try {
      const res = await axios.get("/api/contacts");
      dispatch({ type: GET_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };
  //Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);

      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  //clear contact
  const clearContact = async () => {
    dispatch({ type: CLEAR_CONTACT });
  };

  //Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`/api/contacts/${id}`);

      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg,
      });
    }
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Update Contact
  const updateContact = async contact => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }

    try {
        const res = await axios.put(`/api/contacts/${contact._id}`, contact, config);
        dispatch({
            type: UPDATE_CONTACT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: CONTACT_ERROR,
            payload: err.response.msg
        })
    }
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Filter Contact
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        loading: state.loading,
        getContact,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter,
        clearContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;