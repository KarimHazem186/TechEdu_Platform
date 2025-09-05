import React, { useEffect, useState } from 'react';
import './ForgetPassword.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const { id, token } = useParams();
    const history = useNavigate();
    
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const userValid = async () => {
        try {
            const res = await fetch(`http://localhost:7200/forgotpassword/${id}/${token}`, {
                credentials: "include",
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            console.log("forget",data);
            if (data.status === 201) {
                console.log("User Valid");
            } else {
                history("*");
            }
        } catch (error) {
            console.error("Error validating user:", error);
        }
    };

    const setval = (e) => {
        setPassword(e.target.value);
    };

    const sendPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:7200/${id}/${token}`, {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password })
            });

            const data = await res.json();

            if (data.status === 201) {
                setPassword("");
                setMessage(true);
                setlogin(true);
            } else {
                toast.error("! Token Expired generate new Link");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error("Error updating password:", error);
        } finally {
            setLoading(false);
        }
    };

    const [login,setlogin] = useState(false)

    setTimeout(()=>{
        if(login) {
            history("/login")
        }
    },3000)

    if(message) {
        toast.success("Password Successfully Updated",{
            position:"top-center"
        })
    }

    useEffect(() => {
        userValid();
    }, []);

    return (
        <div className='login-container'>
            <div className="left-image"></div>
            <div className="right-content">
                <h2 className="form-title"><span>*</span>Enter Your NEW Password</h2>
                <form action="#" className='login-form'>
                    {/* {message ? <p style={{ color: "green", fontWeight: "bold", justifyContent: "center", display: "flex" }}>Password Successfully Updated</p> : ""} */}
                    <div className="input-wrapper">
                        {/* <label htmlFor='password'>NEW Password</label> */}
                        <input type="password" placeholder='Enter Your New Password' className='input-field' onChange={setval} id='password' value={password} required />
                    </div>
                    <button className="login-button" onClick={sendPassword} disabled={loading}>
                        {loading ? "Updating..." : "Update"}
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ForgetPassword;
