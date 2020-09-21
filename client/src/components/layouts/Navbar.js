import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import AuthContext from './../../context/auth/authContext';
import ContactContext from './../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {

  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, } = authContext;

  const onLogout = () => {
    contactContext.clearContact();
    logout();
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="/login">
          <i className="fas fa-sign-out-alt" />
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li>
        <Link to="/Login">Login</Link>
      </li>
    </Fragment>
  );

    return (
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          { isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    );
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title : 'Conact Keeper',
    icon : 'fas fa-id-card-alt' 
}

export default Navbar
