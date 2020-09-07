import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axios from 'axios';  
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "./../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  /**
   * state here allows us to access anything in the state
   * and dispatch allows us to dispatch object to the use reducer
   */
  const [state, dispatch] = useReducer(authReducer, initialState);

    ///Load User

    //Register User
    const register = async formData => {
      const config = {
        headers: {
          'Content-Type' : 'Applcation/Json'
        }
      }

      try {
        const res = axios.post('/api/users', formData, config);

        dispatch(({type: REGISTER_SUCCESS, payload: res.data}));
      } catch (err) {
        
      }
    }
    //Login user

    //Logout user

    //Clear errors 

  return (
    <AuthContext.Provider
      value={{
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
