import React, { FC, useContext, useState } from 'react'
import { Modal } from '..'
import { AuthActionTypes, GlobalStateContext } from '@/context'
import axios from 'axios'


const LoginModal: FC = () => {
    const {state: {
        loginModalOpen
    }, dispatch} = useContext(GlobalStateContext)
    // Form state
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')

  const handleClose = () => 
    dispatch({
        type: AuthActionTypes.SET_AUTH_MODAL_OPEN,
        payload: {open:false}
    })
  
  const onSubmit = async () => {
    console.log("Submit", email, password)
    if (!email) {
        setEmailError("Please enter an email address")
        return 
    }
    if (!password) {
        setPasswordError("please enter password")
        return 
    }
    if (!email.includes("@")) {
        setEmailError("invalid email address format")
    return 
    }
    console.log("no error")

    // Log user in 
    const res = await axios.post("http://localhost:5001/users/auth/login", {
        email, password
    })
    if (res.status === 200){
        if (res.data.token){
            const token = res.data.token
        }
        console.log(res.data)
    
    }


  }
  console.log("email error", emailError, "password error", passwordError)
  console.log("loginModalOpen: ", loginModalOpen)
    return (
    <Modal open={loginModalOpen} onClose={handleClose}>
        <Modal.Header>
            <h1 className='display-6'>
            Login

            </h1>
            <div className="d-flex cursor-pointer" onClick={handleClose} >
            <i className="bi bi-x-circle" style={{fontSize: "2rem", color: "red"}}></i>
                </div>
            </Modal.Header>
        <Modal.Content>
<form>
        <div className="mb-3">
  <label className="form-label">Email address</label>
  <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }} type="email" className="form-control" placeholder="name@example.com" required/>
  
{!emailError ? null : <div className="alert alert-danger">
      {emailError}
    </div>}
</div>
    
<div className="mb-3">
  <label className="form-label">Password</label>
  <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }} type="password" className="form-control" placeholder="xxxxxx" />
  
      {!passwordError ? null : <div className="alert alert-danger">{passwordError}</div>}
    
</div>
            </form>
        </Modal.Content>
        <Modal.Actions>
            <button className='btn btn-primary' onClick={onSubmit}>Login</button>
        </Modal.Actions>
    </Modal>
  )
}

export default LoginModal