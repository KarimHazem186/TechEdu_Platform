// import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUS.css'
const ContactUs = () => {
    const [inputValue,setInputValue] =useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
        message:""
      });
    
      // console.log(inputValue)
    
      const handleChange = (e) => {
        // console.log(e.target.value)
        const {name,value} = e.target;
        setInputValue(()=>{
          return {  
            ...inputValue,
            [name]:value
          }
        })
      }

      const handleSubmit = async (e)=>{
        e.preventDefault()
        const {fname,lname,email,mobile,message} = inputValue;
        if(fname==="") {
          toast.error("fname is required")
        } else if(lname===""){
          toast.error("lname is required")
        } else if(email===""){
          toast.error("email is required")
        } else if(!email.includes("@")){
          toast.error("invalid email")
        } else if(mobile===""){
          toast.error("mobile is required")
        }else {
          const res = await fetch("http://localhost:7200/contactus",{
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              fname,lname,email,mobile,message
            })
          });
          const data =await res.json()
          console.log(data)
    
          if(data.status===201) {
            toast.success("Your Response submitted successfully")
            setInputValue({
              ...inputValue,
              fname:"",
              lname:"",
              email:"",
              mobile:"",
              message:""
            })
          }
        }
    
      }
      return (
        <>
          <div className='container mb-3 mt-3 contact'>
            <h2 className='text-center'>ContactUS</h2>
            <div className='container mt-2'>
            <Form className='row mt-2'>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='fname' value={inputValue.fname} placeholder="" onChange={handleChange} />
              </Form.Group>
    
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='lname' value={inputValue.lname} placeholder="" onChange={handleChange} />
              </Form.Group>
    
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' value={inputValue.email} placeholder="" onChange={handleChange} />
              </Form.Group>
    
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile </Form.Label>
                <Form.Control type="text" value={inputValue.mobile} name='mobile' placeholder="" onChange={handleChange} />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message </Form.Label>
                <Form.Control as="textarea" rows={4} name='message' value={inputValue.message} onChange={handleChange} />
              </Form.Group>
    
              <div className='d-flex justify-content-center '>
              <Button variant="primary" className='col-lg-6' type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              </div>
    
            </Form>
            <ToastContainer />
            </div>
          </div>
        </>
      ) 
}

export default ContactUs
