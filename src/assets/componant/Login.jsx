import React from 'react';
import { useDispatch } from 'react-redux';
import {login,logout} from "../features/user"
function Login() {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{
        dispatch(login({name:"Zahoor ", age:20, email:"zahoor!@13" }))
      }}>
        Login
        </button>

        <button onClick={()=>{
            dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login
