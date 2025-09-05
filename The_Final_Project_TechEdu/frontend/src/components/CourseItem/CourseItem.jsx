import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './CourseItem.css'
const CourseItem = ({ id, name, price, description, image }) => {
    return (
        <div className="general">
            <div className="course-item">
                <div className="course-card">
                    <img className='course-img' src={image} alt="" />
                </div>
                <div className="course-info">
                    <div className="course-ratting">
                        <p>{name}</p>
                    </div>
                    <p className="course-desc">{description}</p>
                    <p className="course-price">${price}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseItem
