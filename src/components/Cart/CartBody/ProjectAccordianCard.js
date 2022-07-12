import React, {useState} from 'react';

function ProjectAccordianCard({project, identity, isOpen, recordAccId}) {

    const handleAccClick =() =>{
        recordAccId(identity);
        // setIsThisOpen(!isThisOpen);
    }

  return (
    <section id="project-accordian-card-wrapper">
        <div onClick={handleAccClick}>
            <h1>
                {project.title}
            </h1>
            <span>{isOpen ? "-" : "+"}</span>
        </div>
        { isOpen? 
            <div>
                <hr></hr>
            <p>{project.body}</p>
        </div> : <></>}
    </section>
  )
}

export default ProjectAccordianCard