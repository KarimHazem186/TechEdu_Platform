import React, { useContext } from 'react'
import './Courses.css'
import { StoreContext } from '../../context/StoreContext'
import CourseItem from '../courseitem/courseitem'
const Courses = ({ category }) => {

    const { Top_Watched } = useContext(StoreContext)

    return (
        <div className='course-display' id='course-display'>
            <h2>Top Watched <span>Courses</span></h2>
            <div className="course-display-list">
                {Top_Watched.map((item, index) => {
                    return <CourseItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default Courses
