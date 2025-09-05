import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets';
const Contact = () => {
    return (
        <>
            <div className='url'>
                <p>Contact</p>
            </div>
            <div className='contact-us'>
                <div className='title'>
                    <h2>
                        Contact Us
                    </h2>
                    <p>
                        Have any questions? The quickest way to get in touch with us is using the
                        contact information below.
                    </p>
                </div>
                <div className='title'>
                    <h2>
                        Privacy Inquiries
                    </h2>
                    <p>
                        If you have questions about our Privacy Notice or an enquiry abouthow we
                        protect your personal information, you can contact us at <a href="mailto: privacy@TechEdu.org">privacy@TechEdu.org</a>.
                    </p>
                </div>
                <div className='title'>
                    <h2>
                        Special Concerns
                    </h2>
                    <p>
                        Security vulnerabilities on the Coursera site may be reported via the
                        HackerOne platform. We take our site security and user privacy very
                        seriously, and we appreciate your help in keeping Coursera safe!
                    </p>
                </div>
                <div className='title'>
                    <h2>
                        Our Offices
                    </h2>
                </div>
                <div className='images'>
                    <div className="card">
                        <img src={assets.Cairo} alt="instuctor" />
                        <p>Cairo</p>
                    </div>
                    <div className="card">
                        <img src={assets.Banha} alt="instuctor" />
                        <p>Banha</p>
                    </div>
                    <div className="card">
                        <img src={assets.Alex} alt="instuctor" />
                        <p>Alexandria</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
