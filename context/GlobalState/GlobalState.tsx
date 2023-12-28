'use client'
import { ReactNode, createContext, useReducer } from "react";
import { Action, 
    // AUTH
    AuthActionTypes,
    authReducer,
    isAuthReducer,
    AuthState,
    initialAuthState
 } from "..";

export interface GlobalState extends AuthState {

}
const initialState = {
    ...initialAuthState
}
const GlobalStateContext = createContext({
state: initialState,
dispatch: (action: GlobalStateAction) => {}
})
export type GlobalStateActionTypes = "" | AuthActionTypes
export type GlobalStateAction = Action<GlobalStateActionTypes, any>


export const GlobalStateProvider = ({children}: {children: ReactNode}) => {
    const reducer = (state: GlobalState, action: GlobalStateAction) => {
        console.log("Action creator: ", action)
        if (isAuthReducer(action)) return authReducer(state, action)
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return <GlobalStateContext.Provider value={{
        state,
        dispatch
    }} >{children}</GlobalStateContext.Provider>
}

export default GlobalStateContext