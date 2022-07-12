import React,{useState} from "react";
import IndividualEvent from "./IndividualEvent";
import Modal from '@mui/material/Modal';

function EventPlannerCard({h}) {

    const[isModalOpen, setIsModalOpen] = useState(false);
    const [task, setTask] = useState("");
    const [duration,setDuration] = useState(0);
    const [eventList, setEventList] = useState([]);

    const handleModalClose = () =>{
        setIsModalOpen(false);
    }

    const handleEventDelete = (name) =>{
        let temp = eventList.slice(0);
        temp = temp.filter((e)=>{
            return e.task !==name
        });
        setEventList(temp);
    }

    const handleEventEdit = (originalName, newName) =>{
        let temp = eventList.slice(0);
        temp = temp.filter((e)=>{
            console.log(e, originalName);
            if(e.task===originalName)
                return e.task=newName;
            return e;
        });
        setEventList(temp);
    }

    const handleEventChange = (e)=>{
        setTask(e.target.value);
    }

    const handleEventSubmit = () =>{
        let obj = {
            task,
            duration
        }
        setEventList([...eventList,obj]);
        handleModalClose();
    }

    const handleDurationChange = (e)=>{
        setDuration(e.target.value);
    }

    const getModal = () =>{
        return <Modal 
        open={isModalOpen}
        onClose={handleModalClose}>
            <section id="add-event-modal">
                <span>Name:</span>
                <input onChange={handleEventChange} type="text" required placeholder="Event"/>
                <input type="number" onChange={handleDurationChange}/>
                <button onClick={handleEventSubmit}>Submit</button>
            </section>
        </Modal>
    }

    const handleModalOpen = (e) =>{
        e.stopPropagation();
        setIsModalOpen(true);
    }

    const getEventList = ()=>{
        return <section id="event-cards-wrapper">
            {eventList && eventList.map((e,i)=>{
                return<IndividualEvent key={i} handleEventDelete={handleEventDelete} e={e.task} hour={h.hour} session={h.session} handleEventEdit={handleEventEdit}/>
            })}
        </section>
    }

    return (
        <section>
            <h1 onClick={handleModalOpen}>
                {h.hour}
                {h.session}
            </h1>
            {getEventList()}
            <hr />
            {getModal()}
        </section>
    );
}

export default EventPlannerCard;
