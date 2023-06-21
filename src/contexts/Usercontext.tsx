"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
    logged: boolean
    admin?: boolean
};

type ActionType = {
  type: 'login'|'logOut'| 'admin'
};

const initialState: StateType = {
    logged:false,
    admin: false
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "login":
      return { ...state, logged: true };
    case 'logOut':
      return { ...state, logged: false };
    case 'admin':
      return { ...state, admin: true };
    default:
      return state;
  }
};

export const CounterContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
