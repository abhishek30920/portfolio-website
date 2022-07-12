import React,{useState} from "react";
import Modal from "@mui/material/Modal";

function IndividualEvent({ e, hour, session, handleEventDelete, handleEventEdit }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(e);
  const [isEditable, setIsEditable] = useState(false);

    const handleModalClose = (event) => {
      event.stopPropagation();
        setIsModalOpen(false);
    };

    const handleModalOpen = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
    };

    const EventDelete = (event) =>{
      handleModalClose(event);
      handleEventDelete(e);
    }

    const showModalData = () =>{
      return <section>
        <span>Name:{e}</span>
        <p>{hour + session}-{hour + 1 + session}</p>
      </section>
    }

    const handleEventChange = (e)=>{
      setCurrentEvent(e.target.value);
    }


    const handleEditSubmit = (event) =>{
      handleModalClose(event);
      handleEventEdit(e, currentEvent);
    }

    const showEditableData = () =>{
      return (
        <section>
          <input onChange={handleEventChange} value={currentEvent} type="text" required placeholder="Event" />
          <button onClick={handleEditSubmit}>Submit</button>
        </section>
      )
    }

    const EventEdit = () =>{
      setIsEditable(true);
    }

    const getModal = () => {
        return (
            <Modal open={isModalOpen} onClose={handleModalClose} aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                <section id="edit-modal-wrapper">
                    {
                      isEditable ? showEditableData() : showModalData()
                    }
                    <button onClick={EventDelete}>delete</button>
                    <button onClick={EventEdit}>Edit</button>
                </section>
            </Modal>
        );
    };

    return (
        <section onClick={handleModalOpen} id="individual-event-wrapper">
            <h1>{e}</h1>
            <p>
                {hour + session}-{hour + 1 + session}
            </p>
            {getModal()}
        </section>
    );
}

export default IndividualEvent;
