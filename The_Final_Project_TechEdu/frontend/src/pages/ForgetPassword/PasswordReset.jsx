import React, { useState } from 'react'
import {ToastContainer,toast} from 'react-toastify'
import './ForgetPassword.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const PasswordReset = () => {
    const [email,setEmail] = useState("");
  
    const [message,setMessage] = useState("")
  
    const setVal = (e)=>{
      setEmail(e.target.value);
    }
    
    const sendLink =async(e)=>{
      e.preventDefault();
  
      const res = await fetch("http://localhost:7200/sendpasswordlink",{
        credentials:"include",  
        method: "POST",
          headers:{
              "Content-Type": "application/json",
          },
          body: JSON.stringify({email})
      });
      const data = await res.json();
      console.log("passwordreset",data)
      if(data.status===201) {
          setEmail("");
          setMessage(true)
      } else {
          toast.error("Invalid User")
      }
  
    }

    if(message) {
        toast.success("Password reset link send Successfully in Your Email",{
            position:"top-center"
        })
    }
  
    return (
        <div className='login-container'>
            <div className="left-image">

            </div>
            <div className="right-content">
                <h2 className="form-title"><span>*</span> Enter Email </h2>
                <form action="#" className='login-form'>
                {/* {message ? <p style={{color:"green",fontWeight:"bold",justifyContent:"center",display:"flex"}}>Password reset link send Successfully in Your Email</p> :""} */}

                    <div className="input-wrapper">
                    {/* <label htmlFor='email'>Email</label> */}
                        <input type="email" placeholder='Email' value={email} id='password' className='input-field' onChange={setVal} />
                        <i className="bi bi-envelope"></i>
                    </div>
                    <button className='login-button' onClick={sendLink}>Send</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default PasswordReset