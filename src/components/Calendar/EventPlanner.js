import React, {useState, useEffect} from 'react';
import EventPlannerCard from "./EventPlannerCard";
import "./EventPlanner.css";

function EventPlanner() {
const [hoursList, setHoursList] = useState([]);

useEffect(()=>{
    let result=[];
    for(let i=0;i<24;i++) {
        let obj = {};
        obj.session='AM';
        if(!(i%12)) {
            obj.hour=12;
        } else {
            obj.hour = i%12;
        }
        if(i>=12)
            obj.session='PM';
        result.push(obj);
    }
    setHoursList(result);
},[])

const getHoursList = () =>{
    return <section>
        {
            hoursList && hoursList.map((h,i)=>{
                return <EventPlannerCard h={h} key={i}/>
            })
        }
    </section>
}

  return (
    <section>
        {getHoursList()}
    </section>
    
  )
}

export default EventPlanner