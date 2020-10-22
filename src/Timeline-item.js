import React from 'react'
    
const TimeLineItem = ({data}) => (

  <div className='timeline-item' > 
    <div className='timeline-item-content'>
      <span className='tag' style={{background: data.category.color}}> 
        {data.category.tag}
      </span>
      
      <time className='date'> 
        {data.date}
      </time>
      
      <p> {data.text} </p>
      
      {data.link && (<a href={data.link.urls} target='_blanlk' rel='noopener noreference'>
        {data.link.text}
      </a>)}
  
      <span className='circle'></span>
  
    </div>
  </div>
);

export default TimeLineItem;
