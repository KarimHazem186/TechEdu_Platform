import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>TechEdu</h2>
                <h2>
                    We Own The Future
                </h2>
                <p>
                    An Integrated Platform That has
                    EveryThing a Student Needs To Succed
                </p>
                <button className='btn'><Link to="/signup">RegisterNow</Link></button>

            </div>

        </div>
    )
}

export default Header
