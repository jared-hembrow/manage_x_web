import { AuthActionTypes, GlobalStateContext } from '@/context'
import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import * as jwt from "jsonwebtoken"

type Props = {}

const NavbarUser = (props: Props) => {
    const {state:{user},dispatch} = useContext(GlobalStateContext) 
  const openLogin = () => {
    console.log("open")
    dispatch({
      type: AuthActionTypes.SET_AUTH_MODAL_OPEN,
      payload: {
        open: true
      }
    })
  }
  const logoutUser = () => {
    dispatch({
        type: AuthActionTypes.LOG_USER_OUT
    })
    localStorage.removeItem("manage_x_token")
  }

  const verifyLoggedin = async (token: string) => {
    const res = await axios.get("http://localhost:5001/users/auth/verify", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if (res.status === 200) {
        const user = jwt.decode(token)
        dispatch({
            type: AuthActionTypes.SET_USER,
            payload: user
          })
    }
  } 

  useEffect(() => {
    if (!localStorage) return
    console.log("hi")
    const token = localStorage.getItem("manage_x_token")
    console.log("token", token)
    if (!token) return 
    verifyLoggedin(token)
  }, [])
  return (
    <div className='d-flex'>
        {!user ? 
        <div onClick={openLogin}>

        login
        </div> : <div onClick={logoutUser}>Logout</div>
        }
        </div>
  )
}

export default NavbarUser