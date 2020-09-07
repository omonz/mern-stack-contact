import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
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
   
  };

  /**
   * state here allows us to access anything in the state
   * and dispatch allows us to dispatch object to the use reducer
   */
  const [state, dispatch] = useReducer(authReducer, initialState);

 
 

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
