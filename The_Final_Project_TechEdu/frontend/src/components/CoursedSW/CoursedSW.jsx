import React, { useContext, useEffect } from 'react';
import '../Coursedisplay/Coursedisplay.css';
// import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import {getAllCourses} from '../redux/actions/action'
import { useDispatch,useSelector } from 'react-redux';
import { LoginContext } from '../../context/ContextProvider';
const CoursedSW = (category) => {
    const history = useNavigate("")

    // const { Lesson } = useContext(StoreContext);
    const {courses} = useSelector(state=>state.getCoursesdata)
    console.log(courses)
    // console.log(courses[0].cname)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllCourses())
    },[dispatch])

    const { accountCart, setAccountCart, accountFav, setAccountFav,fname,setFname } = useContext(LoginContext);

    console.log("fname",fname)
    console.log("accountCart",accountCart)
    console.log("accountFav",accountFav)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartResponse = await fetch('http://localhost:7200/user/courses/cart', {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
    
                if (!cartResponse.ok) {
                    throw new Error('Network response was not ok');
                }
    
                const cartData = await cartResponse.json();
                console.log("cartData",cartData)
                // setAccountCart(cartData);
                setFname(cartData.user.fname)
                
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data');
            }
        };
    
        fetchData();
    }, [setAccountCart, setAccountFav]);
    
    // Add to cart function
    const addtocart = async (id) => {
        console.log(id);
        const course = courses.find(course => course._id === id);
        console.log(course);
        if (!course) {
            alert('Course not found');
            return;
        }
    
        try {
            const checkres = await fetch(`http://localhost:7200/user/courses/addcart/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course }),
            });
    
            if (!checkres.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data1 = await checkres.json();
            if (checkres.status === 401 || !data1) {
                console.log('User Invalid');
                alert('User Invalid');
            } else {
                history('/courses/viewcourse/cart');
                // setAccountCart(data1);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('An error occurred while adding to cart');
        }
    };

    // Add to favorites function
    const addtofav = async (id) => {
        const course = courses.find(course => course._id === id);
        if (!course) {
            alert('Course not found');
            return;
        }
    
        try {
            const checkres = await fetch(`http://localhost:7200/user/courses/fav/${id}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({course}),
            });
    
            if (!checkres.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data1 = await checkres.json();
            if (checkres.status === 401 || !data1) {
                console.log('User Invalid');
                alert('User Invalid');
            } else {
                history('/courses/viewcourse/favourite');
                // setAccountFav(data1);
            }
        } catch (error) {
            console.error('Error adding to favorites:', error);
            alert('An error occurred while adding to favorites');
        }
    };


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
            <div className='url'>
                <p>Courses/Viewcourse</p>
            </div>

            <div className='cour-display' id='c-display'>
                <div className="cour-display-list">
                {(() => {
                    const activeCourses = courses.filter(item => item.status === 'Active' && item.categoryCourse === "Software");
                    return (
                        <>
                {activeCourses.length === 0 ? (
                    <>No Courses Available</>
                ) : (
                    activeCourses.map((item, index) => (
                        <div className='cour-item' key={index}>
                            <div className="cour-item-img-container">
                                <img src={`http://localhost:7200/uploads/images/${item.courseProfile}`} alt="" className='cour-item-image' />
                                <div className="course-details-desc">
                                    <p className='view'><Link to={`/courses/viewcourse/lesson/${item._id}`}>View Lesson</Link></p>
                                </div>
                            </div>
                            <div className="cour-item-info">
                                <h2>{item.cname}</h2>
                                <div className="cour-item-icons">
                                    <button onClick={()=>addtocart(item._id)}><img className='shp-icon' src={assets.shopping_card} alt="" /></button>
                                    <button onClick={()=>addtofav(item._id)}><img className='fav-icon' src={assets.favourite_icon} alt="" /></button>
                                </div>
                                <p className='cour-item-desc'>
                                    {item.description}
                                </p>
                                <p className="cour-item-price">
                                    ${item.price}
                                </p>
                                <p className="cour-item-price" style={{textAlign:"right",marginRight:"100px", fontWeight:"500"}}>
                                    Instructor: <span style={{color:"orange"}}> {item.Iname} </span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </>
            );
        })()} 
             
                </div>
            </div>
        </>
    )
}

export default CoursedSW;
