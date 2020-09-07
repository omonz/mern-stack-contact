import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);

    const { filterContact, clearFilter, filtered } = contactContext;

    const text = useRef('');

    const onChange = e => {
        if(text.current.value !== ''){
            filterContact(e.target.value);
        }else{
            clearFilter()
        }
    }

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    },[]);

    return (
        <div>
            <input ref={text} type='text' placeholder='Seaerch Contact' onChange={onChange}/>
        </div>
    )
}

export default ContactFilter;