import { Action, GlobalState, User } from "@/context";
import { GlobalStateAction } from "@/context/GlobalState";
export interface AuthState {
  loginModalOpen: boolean;
  user: null | User;
}
export const initialAuthState: AuthState = {
  loginModalOpen: false,
  user: null,
};
export enum AuthActionTypes {
  SET_AUTH_MODAL_OPEN = "SET_AUTH_MODAL_OPEN",
  // USERS
  SET_USER = "SET_USER",
  //   LOGING
  LOG_USER_OUT = "LOG_USER_OUT",
}
export type AuthAction = Action<AuthActionTypes, any>;

export const isValidUser = (user: { [key: string]: any }): user is User => {
  if (!user.hasOwnProperty("email") || typeof user.email !== "string")
    return false;
  if (!user.hasOwnProperty("id") || typeof user.id !== "string") return false;
  return true;
};

export const isAuthReducer = (
  action: GlobalStateAction
): action is AuthAction => {
  if (action.type in AuthActionTypes) return true;
  return false;
};

export const authReducer = (state: GlobalState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTH_MODAL_OPEN:
      console.log("auth open");
      if (
        !action.payload.hasOwnProperty("open") ||
        typeof action.payload.open !== "boolean"
      )
        return state;
      console.log("changing state");
      return {
        ...state,
        loginModalOpen: action.payload.open,
      };
    // USERS
    case AuthActionTypes.SET_USER:
      if (!isValidUser(action.payload)) return state;
      return { ...state, user: action.payload };
    // LOGING
    case AuthActionTypes.LOG_USER_OUT:
      return { user: null };
    default:
      return state;
  }
};
