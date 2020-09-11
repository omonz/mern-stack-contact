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

const AuthState = props => {
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
    const loadUser = () => {
      console.log('load user');
    }

    //Register User
    const register = async formData => {
      const config = {
        headers: {
          'Content-Type' : 'applcation/json'
        }
      }

      try {
        const res = await axios.post('/api/users', formData, config);

        dispatch(({
          type: REGISTER_SUCCESS,
          payload: res.data
        }));
      } catch (err) {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response.data.msg 
        });
      }
    }
    
    //Login user
    const login = () => {
      console.log("login");
    };

    //Logout user
    const logout = () => {
      console.log("logout");
    };

    //Clear errors 
    const clearErrors = () => {
      dispatch({type: CLEAR_ERRORS});
    };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
