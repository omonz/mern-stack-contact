import React, { useState, useContext, useEffect } from "react";
import AlertContext from './../../context/alert/alertContext';
import AuthContext from './../../context/auth/authContext';

const Register = props => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;
 
    useEffect(() => {
      //redirect to homepage when authenticated
      if(isAuthenticated){
        props.history.push('/');
      }

      if(error === 'User already exist'){
        setAlert(error, 'danger');

        clearErrors();
      }
      //eslint-disable-next-line
    }, [error, clearErrors, setAlert]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const {name, email, password, password2 } = user;


    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === '' || password2 === ''){
            setAlert('Please all field required', 'danger');
        }else if(password !== password2){
            setAlert('Password does not match', 'danger');
        }else{
         register({
           name,
           email, 
           password
          });
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
           
            value={password}
            onChange={onChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <input 
            type="password"
           
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
