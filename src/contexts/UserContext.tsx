"use client"

import React, { Dispatch, createContext, useReducer } from "react"

type StateType = {
  logged: boolean
  admin?: boolean
  token?: string
}

type ActionType = {
  type: 'login' | 'logOut' | 'admin'
}

const initialState: StateType = {
  logged: false,
  admin: false
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "login":
      return { ...state, logged: true }
    case 'logOut':
      return { ...state, logged: false }
    case 'admin':
      return { ...state, admin: true }
    default:
      return state
  }
}

export const UserContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({ state: initialState, dispatch: () => null })

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
