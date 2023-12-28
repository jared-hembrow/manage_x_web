import { Action, GlobalState } from "@/context";
import { GlobalStateAction } from "@/context/GlobalState";
export interface AuthState  {
    loginModalOpen: boolean
}
export const initialAuthState: AuthState = {
    loginModalOpen: false
}
export enum AuthActionTypes {
    SET_AUTH_MODAL_OPEN = "SET_AUTH_MODAL_OPEN"
}
export type AuthAction = Action<AuthActionTypes, any>



export const isAuthReducer = (action: GlobalStateAction): action is AuthAction => {
    if (action.type in AuthActionTypes) return true
    return false
}


export const authReducer = (state: GlobalState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_MODAL_OPEN:
            console.log("auth open")
            if (!action.payload.hasOwnProperty("open") || typeof action.payload.open !== 'boolean') return state
            console.log("changing state")
            return {
                ...state,
                loginModalOpen: action.payload.open
            }

        


        default: return state
    }

}