import React, { useState, useContext } from "react";
import AlertContext from './../../context/alert/alertContext';

const Register = () => {

    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const {name, email, password, password2 } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '' || password2 === ''){
            setAlert('Please all field required', 'danger');
        }else if(password !== password2){
            setAlert('Password does not match', 'danger');
        }else{
          alert('create user account');
            console.log('creating user account');
        }
    }

  return (
    <div className="container-form">
      <h1>
        Account <span className="text-primary text-center">Register</span>
      </h1>
      <form onSubmit={onSubmit} className='form-container'>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={onChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={onChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input
            type="password"
            name="password"
            minLength='6'
            required
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <input
            type="password"
            required
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm password"
            minLength='6'
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Register User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
