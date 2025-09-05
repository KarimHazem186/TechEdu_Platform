import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'
const About = () => {
    return (
        <>
            <div className='url'>
                <p>About</p>
            </div>
            <div className="about-us">
                <div className='title'>
                    <h2>
                        Our Vision
                    </h2>
                    <p>
                        We envision a world where anyone, anywhere has the power to
                        transform their lives through learning.
                    </p>
                </div>
                <div className='title'>
                    <h2>
                        We Believe
                    </h2>
                    <p>
                        Learning Is The Source Of Human Progress.
                    </p>
                </div>
                <div className="progress">
                    <div className="progress-title">
                        <h2 className='title-one'>
                            <span>+300 </span> World-class partners are teaching the world.
                        </h2>
                        <p className='title-two'>
                            TechEdu has truly helped to democratize education. I was born in Trinidad and Tobago, and I have lived in Jamaica and the United States. I have received emails from students in all three locations who have taken my course on the Coursera platform.
                            I don't believe Coursera is focused on education alone. Coursera is in the business of reaching learners and changing lives.
                        </p>
                        <p className='title-three'>
                            AbdelGafor Elboray,
                        </p>
                        <p className='title-four'>

                            A job in which you are not a boy cannot be a Mal3em.
                        </p>
                    </div>
                    <div className='progress-img'>
                        <img src={assets.Instructor} alt="instuctor" />

                    </div>
                </div>
                <div className='title'>
                    <h2>
                        Our story
                    </h2>
                    <p className='title-desc'>
                        TechEdu was founded by AbdelGafor Elboray and Gafar in 2024 with a vision of
                        providing life-transforming learning experiences to learners around the world.
                        Today, Coursera is a global platform for online learning and career development
                        that offers anyone, anywhere, access to online courses and degrees from
                        leading universities and companies. Coursera received B Corp certification in
                        February 2021, which means that we have a legal duty not only to our
                        shareholders, but to also make a positive impact on society more broadly, as we
                        continue our efforts to reduce barriers to world-class education for all. 148
                        million learners and more than 7,000 campuses, businesses, and governments
                        have come to Coursera to access world-class learning—anytime, anywhere.
                    </p>
                </div>
            </div>
        </>

    )
}

export default About;
