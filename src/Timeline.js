import React from 'react';
import TimeLineItem from './Timeline-item';
import TimeLineData from './data'; 

const TimeLine = () => TimeLineData.length > 0 &&  (
  <div className="timeline-container"> 
    {TimeLineData.map( (data , idx) => ( <TimeLineItem data = {data} key = {idx} /> ))}
  </div>
);
 
export default TimeLine;
