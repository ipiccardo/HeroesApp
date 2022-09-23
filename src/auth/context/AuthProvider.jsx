import React from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { useReducer } from "react";
import { types } from "../types/types";



const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const onLogin = async(name = '') => { 
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }
    
    dispatch(action);
  }



  return <AuthContext.Provider value={{
    ...state,
    onLogin: onLogin
  }}>{children}</AuthContext.Provider>;
};
