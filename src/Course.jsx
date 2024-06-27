import React from 'react'
import './css/Course.css'

function Course({ course }) {
    const{ id,title,description,price,link,image } = course;
  return (
    <div className='course'>
        <div>
            <img src={image} width={330} height={200}/>
            <h4 className='course-title'>{title}</h4>
            <p className='course-description'>{description}</p>
            <h3 className='course-price'>{price}</h3> 
           <div className='course-link' ><a style={{textDecoration:'none'}} href={link}>Satın Almak için</a></div>
            
        </div>
    </div>
    
  )
}

export default Course