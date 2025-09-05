import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Signup = () => {
    const history = useNavigate()
    const [login,setlogin] = useState(false)
    const [registerdata,setRegisterdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    })
    
    console.log(registerdata)

    const handleChange = (e)=>{
        e.preventDefault();
        const {name,value}=e.target
        setRegisterdata(()=>{
            return {
                ...registerdata,
                [name]: value
            }
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {fname,email,mobile,password,cpassword} = registerdata;

        if(fname==="") {
            toast.warn("Fname must be provided👎!",{
                position:"top-center",
            })
        } else if (email === "" || !email.includes('@')) {
            toast.warn("A valid email must be provided👎!", {
                position: "top-center",
            });
        } else if (mobile === "" || !/^\d{11}$/.test(mobile)) {
            toast.warn("A valid mobile number must be provided👎!", {
                position: "top-center",
            });
        }else if (password === "" || password.length < 7 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
            toast.warn("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character👎!", {
                position: "top-center",
            });
        } else if (password !== cpassword) {
            toast.warn("Passwords do not match👎!", {
                position: "top-center",
            });
        }
        


        const res = await fetch('http://localhost:7200/user/register',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                fname,email,mobile,password,cpassword
            })
        });
        const data = await res.json();
        // console.log(data)
        if(res.status===422 || !data){
            // alert("no data")
            // toast.warn("Invalid Details👎!",{
            //     position:"top-center"
            // })
        } else {
            // alert("Registration done successfully")
            setlogin(true);
            toast.success("Registration done successfully😃!",{
                position:"top-center"
            })
            setRegisterdata({
                ...registerdata,
                fname:"",email:"",mobile:"",password:"",cpassword:""

            })
        }
    }

    setTimeout(()=>{
        if(login) {
            history("/login")
        }
    },2500)
    return (
        <div>
            <div className="signup-container">
                <div className="left-image">
                </div>
                <div className="right-content">
                    <h2 className="form-title">Register <span>NOW</span></h2>
                    <div className="social-signup">
                        <button className="social-button">
                            <i className="bi bi-google"></i>
                            Google
                        </button>
                        <button className="social-button">
                            <i className="bi bi-facebook"></i>
                            Facebook
                        </button>
                    </div>
                    <p className="seprator"><span>or</span></p>
                    <form action="#" className="signup-form" method='POST'>
                        <div className="input-wrapper">
                            <input type="text"
                             name="fname" 
                             value={registerdata.fname}
                              placeholder="Your Name" 
                              className="input-field" 
                            //   required 
                            onChange={handleChange}
                              />
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div className="input-wrapper">
                            <input type="email" 
                            name="email" 
                            value={registerdata.email}
                            placeholder="Email" 
                            className="input-field" 
                            // required 
                            onChange={handleChange}
                            />
                            <i className="bi bi-envelope"></i>
                        </div>
                        <div className="input-wrapper">
                            <input type="string" 
                            name="mobile"
                            value={registerdata.mobile} 
                            placeholder="Phone Number"
                             className="input-field" 
                            //  required 
                            onChange={handleChange}
                             />
                        </div>
                        <div className="input-wrapper">
                            <input type="password" 
                            name="password"
                            value={registerdata.password}
                            placeholder="Password"
                            className="input-field" 
                            //   required
                            onChange={handleChange} 
                              />
                            <i className="bi bi-email"></i>
                        </div>
                        <div className="input-wrapper">
                            <input type="password" 
                            name="cpassword" 
                            value={registerdata.cpassword}
                            placeholder="Confirmpassord" 
                            className="input-field" 
                            // required 
                            onChange={handleChange}
                            />
                            <i className="bi bi-email"></i>
                        </div>
                        <button className="signup-button" onClick={handleSubmit}>Signup</button>
                    </form>
                    <p className="signup-text">Don't have an account? <Link to="/login">Login</Link></p>
                    
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}
export default Signup
