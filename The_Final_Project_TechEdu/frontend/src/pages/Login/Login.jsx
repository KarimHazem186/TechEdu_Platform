import React, { useContext, useState } from 'react'
import './Login.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
const Login = () => {
    const history = useNavigate()
    const [logindata, setLogindata]=useState({
        email:"",
        password:"",
    })
    console.log(logindata)

    const {accountCart,setAccountCart} = useContext(LoginContext)

    const [home,setHome] = useState(false) 

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setLogindata(()=>{
            return {
              ...logindata,
              [name]:value
            }
        })
    }

    const handleSubmit=async (e) => {
        e.preventDefault();
       const {email,password}=logindata
       if (email === "" || !email.includes('@')) {
        toast.warn("A valid email must be provided👎!", {
            position: "top-center",
        });
       } else if (password === "" || password.length < 7 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        toast.warn("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character👎!", {
            position: "top-center",
        });
       }
        const res = await fetch('http://localhost:7200/user/login',{
            method:"POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        console.log("login",data)
        if(res.status === 201) {
            // alert("Login done successfully")
            setAccountCart(data)
            // toast.success("Login done successfully😃!",{
            //     position:"top-center"
            // })
            // alert("Login done successfully")
            // history("/")
            // window.location.reload()
            setHome(true)
            toast.success("Login done successfully😃!",{
                position:"top-center"
            })
            setLogindata({
                ...logindata,
                email:"",password:""
            })
        } else {
            toast.error("ERROR👎!",{
                position:"top-center"
            })
        }
        

        
        // if(res.status===400 || !data){
        //     // alert("no data")
        //     // toast.warn("Invalid Details👎!",{
        //         // position:"top-center"
        //     // })
        // } else {
            //// alert("Login done successfully")
        //     toast.success("Login done successfully😃!",{
        //         position:"top-center"
        //     })
        //     setLogindata({
        //         ...logindata,
        //         email:"",password:""
        //     })
        // }
    }

    setTimeout(()=>{
        if(home){
            history("/")
           window.location.reload()
        } 
    },2000)

    return (
        <div className='login-container'>
            <div className="left-image">

            </div>
            <div className="right-content">
                <h2 className="form-title">Login <span>NOW</span></h2>
                <div className="social-login">
                    <button className='social-button'>
                        <i className="bi bi-google"></i>
                        Google
                    </button>
                    <button className='social-button'>
                        <i className="bi bi-facebook"></i>
                        Facebook
                    </button>
                </div>
                <p className="seprator"><span>or</span></p>
                <form action="#" className='login-form' method='POST'>
                    <div className="input-wrapper">
                        <input type="email" 
                        name='email' 
                        value={logindata.email}
                        placeholder='Email' 
                        className='input-field' 
                        // required 
                        onChange={handleChange} 
                        />
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="input-wrapper">
                        <input type="password"
                         name='password' 
                         value={logindata.password}
                         placeholder='Password'
                          className='input-field'
                          //   required 
                          onChange={handleChange} 
                          />

                    </div>
                    <Link to="/password-reset" className="forget-pass-link">Forget Password? </Link>
                    <button className="login-button" onClick={handleSubmit}>Login</button>
                </form>
                <p className="signup-text">Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
