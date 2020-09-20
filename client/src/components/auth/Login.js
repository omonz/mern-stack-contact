import React, { useState, useContext, useEffect } from "react";
import AlertContext from "./../../context/alert/alertContext";
import AuthContext from "./../../context/auth/authContext";

const Login = props => {

  
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    //redirect to homepage when authenticated
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "user not found") {
      setAlert(error, "danger");

      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, clearErrors, setAlert]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(email === '' || password === ''){
      setAlert('Please all fields are required', 'danger')
    }else{
      login({
        email,
        password
      });
    }
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
