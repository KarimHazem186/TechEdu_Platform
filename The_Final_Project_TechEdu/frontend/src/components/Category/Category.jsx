import React, { useState } from 'react'
import './Category.css'
import { Courses } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Category = () => {
    const [item, setItems] = useState(Courses);
    const menuItems = [...new Set(Courses.map((menuItems) => menuItems.category))]

    const filterItems = (cat) => {
        const newItems = Courses.filter((newval) => newval.category === cat)
        setItems(newItems);
    }

    return (
        <div>
            <div className="header-section">
                <h1 className=''><span>Course</span> Category</h1>
            </div>

            <div className="filter-section">
                <button className='btn-filter' onClick={() => setItems(Courses)}>
                    All
                </button>
                {menuItems.map(menuItems => (
                    <button className='btn-filter' onClick={() => filterItems(menuItems)}>{menuItems}</button>
                ))}

            </div>

            <div className="course-filter">
                <div className="grid-container">
                    {item.map((item) => (
                        <div key={item.id} className='custom-card'>
                            <div className="card-image">
                                <img src={item.image} alt="" className='image' />
                                <div className="course-details">
                                    <p className='name'>{item.name}</p>
                                    {item.name === 'Web Development' ? 
                                    <p className='view'><Link to="/courses/viewcourse/webdevelopment">View Courses</Link></p>
                                    :"" }
                                    {item.name === 'IOT' ? 
                                    <p className='view'><Link to="/courses/viewcourse/iot">View Courses</Link></p>
                                    :"" }
                                    {item.name === 'Artificial Intelligence' ? 
                                    <p className='view'><Link to="/courses/viewcourse/ai">View Courses</Link></p>
                                    :"" }
                                    {item.name === 'Software Engineering' ? 
                                    <p className='view'><Link to="/courses/viewcourse/sw">View Courses</Link></p>
                                    :"" }
                                    {item.name === 'UI/UX' ? 
                                    <p className='view'><Link to="/courses/viewcourse/design">View Courses</Link></p>
                                    :"" }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Category;
