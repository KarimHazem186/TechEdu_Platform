import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Courses from '../../components/Courses/Courses'
import Hero from '../../components/Hero/Hero'
import { Link } from 'react-router-dom'
const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <Hero />
            <Courses category={category} />
            <div className='view'>
                <Link to='/courses'><button className='view-course'>View Courses</button></Link>
            </div>
        </div>
    )
}

export default Home
