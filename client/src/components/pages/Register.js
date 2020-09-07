import React, { useState } from "react";

const Register = () => {

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
        console.log('creating user account');
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
