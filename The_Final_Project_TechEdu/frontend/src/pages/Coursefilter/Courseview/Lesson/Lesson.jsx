import React, { useEffect, useState } from 'react'
import './Lesson.css'
import { Link, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
const Lesson = () => {
    const {id}=useParams()
    console.log(id)
    const [content,setContent] = useState("")
   console.log(content)

    const getCourseDetails =async()=>{
        const res =await fetch(`http://localhost:7200/courses/viewcourse/lesson/${id}`,{
            method: 'GET',
            headers:{
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        // console.log(data)
        if(res.status !=201) {
            console.log("no data available")
        } else {
            console.log("get data");
            setContent(data)
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            getCourseDetails()

        },2000)
    },[id])

    /*
    {
                content ?  <div className='circle'> 
                <CircularProgress />
                <h2>Loading...</h2>
              </div> : ""
            }
    */
    return (
        <>
            
            {
                content ? (
                    <> 
                    <div className='url'>
                       <p>Courses/Viewcourse/{content.cname}</p>
                    </div>
                    <div className='about-course'>
                <div className="lesson-details">
                    <h2>Course Description</h2>
                    <p>
                        {content.description}
                    </p>
                    <h2>Course Content</h2>
                    <ul>
                        {/* <li>learn HTML</li>
                        <li>learn CSS</li>
                        <li>learn HTML5</li>
                        <li>learn CSS3</li>
                        <li>Project With HTML and Css</li> */}
                       <li> {content.content} </li>
                    </ul>
                    <a href="#" style={{marginTop:"20px"}}><Link style={{marginTop:"20px"}} to={`/courses/viewcourse/lesson/video/${id}`}>Watch Video</Link></a>
                    <h4 style={{textAlign:"right",marginRight:"300px"}}>Instructor:<span style={{color:"#e69e19"}}> {content.Iname}</span></h4>
                </div>
            </div>
                    </>
                ) : (
                    <div className='circle'> 
                        <CircularProgress />
                        <h2>Loading...</h2>
                    </div>
                )
            }
            
            
        </>
    )
}

export default Lesson
