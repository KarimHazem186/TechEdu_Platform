import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { Divider } from '@mui/material';
import { LoginContext } from '../../context/ContextProvider';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart = () => {
  const { cart } = useContext(StoreContext);

  const [cartdata,setCartdata] = useState("")
  // console.log("cartdata",cartdata)

  // const handleRemove = () => {
  //   console.log('Remove')
  // }
  const handleCheckout = () => {
    alert('You Are Pay')
    console.log('You Are Pay')
  }

  const getdatabuy = async()=>{
    const res = await fetch("http://localhost:7200/courses/viewcourse/cart/cartdetails",{
      method: 'GET',
      headers: {
        Accept:"application/json",
        "Content-Type": "application/json"
      },
      credentials:"include"
    });
    const data = await res.json()
    if(res.status !==201) {
      console.log("error")
    } else {
      setCartdata(data.carts)
      setAccountCart(data.carts)
    }
  };

  useEffect(()=>{
    getdatabuy();
  },[cartdata])


  const [price,setPrice] = useState(0)
  const totalAmount = () => {
    let totalPrice = 0;
    { cartdata.length ?
    cartdata.forEach((course) => {
      totalPrice += parseFloat(course.price); // Assuming price is a string and needs to be converted to a number
    }) :""
  }
    setPrice(totalPrice);
  };
  
  useEffect(()=>{
    totalAmount()
  })
  console.log("price",price)

  const {accountCart,setAccountCart} = useContext(LoginContext)
  const {accountFav,setAccountFav} = useContext(LoginContext) 

  // Remove data
  const handleRemove = async(id)=>{
    try {
      const res = await fetch(`http://localhost:7200/removefromcart/${id}`,{
        method: "DELETE",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials:"include"
      });
      const data = await res.json()
      console.log(data)
      if(res.status==400 || !data) {
        console.log("error")
      } else {
        console.log("user delete course successfully")
        // setAccountCart(data)
        // setAccountCart(data.carts)
        // setAccountFav(data)
        toast.success("Course delete Successfully",{
          position:"top-center"
        })
        getdatabuy()
      }
    } catch(error) {
      console.log("error",error)
    }
  }

  const getdetailsvaliduser =async()=>{
    const res = await fetch("http://localhost:7200/validuser",{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    });
    const data = await res.json()
    // console.log("validuserdata",data.favouriates)
    // console.log("validuserdata",data)

    if(res.status !==201) {
        console.log("error")
    } else {
        console.log("data valid");
        setAccountCart(data.carts)
        setAccountFav(data.favouriates)
        // setname(data.fname)
    }
}

useEffect(()=>{
    getdetailsvaliduser()
},[])


  return (
    <>
    {
      cartdata.length ? 
      <div className='cart'>
      <h2>Shopping <span>Cart</span></h2>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Name</th>
            <th>typeCategory</th>
            <th>Price</th>
            {/* <th>Subtotal</th> */}
            <th>Remove</th>
          </tr>
        </thead>
        {cartdata.map((item, index) => {
          return (
            <>
            <tbody key={index}>
              <tr key={index}>
                <td className='image-item'><img src={`http://localhost:7200/uploads/images/${item.courseProfile}`} alt={item.name} className="item-image" /></td>
                <td>{item.cname}</td>
                <td>{item.categoryCourse}</td>
                <td>${item.price}</td>
                {/* <td>{item.price}$</td> */}
                <td>
                  <button onClick={() => handleRemove(item._id)} className='btn-c'>Remove</button>
                </td>
                
              </tr>

            </tbody>
            </>
          )
        })
        }
      </table>

      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div className='cart-total'>
        <h3>**Cart <span>Total**</span></h3>
        <table className='cart-table'>
          <tr>
            <td>Cart Subtotal  ({cartdata.length} courses)</td>
            <td>${price}.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${price}.00</td>
          </tr>
        </table>
        <button onClick={() => handleCheckout()} className='btn-c'>Process To Check OuT</button>
      </div>
      <ToastContainer />
    </div> : ""
    }
    </>
    
  )
}

export default Cart
