import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Log User In");
  };

  return (
    <div className="container-form">
      <form onSubmit={onSubmit} className='form-container'>
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
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
          <button type="submit" className="btn btn-primary btn-block">
            Login User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
