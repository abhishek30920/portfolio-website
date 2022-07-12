import React, {useState} from 'react';
import ProjectAccordianCard from "./ProjectAccordianCard";
import "./styles/ProjectAccordian.css";

const PROJECTS = [
    {
        title:"To-Do App",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies tristique neque, nec molestie nisl vulputate in. Praesent pharetra diam non arcu euismod, ut iaculis nunc gravida. Ut ultricies aliquet blandit. Ut eros nisl, consequat eu nisi quis, commodo bibendum est. Etiam placerat interdum felis ac elementum. Cras mattis fermentum leo id malesuada. Proin sodales nisl nec eros maximus, quis laoreet quam pharetra."
    },
    {
        title:"Lorem Ipsum",
        body:"Suspendisse volutpat molestie neque, vitae convallis leo hendrerit ac. Mauris cursus nisi id tincidunt tempor. Curabitur dapibus justo in urna vehicula pharetra. Vestibulum sit amet sem quis sapien interdum ultricies. Ut venenatis blandit metus vitae rhoncus. Nunc consectetur sapien ac arcu varius, consectetur tincidunt neque ultricies."
    },
    {
        title:"Suspendisse volutpat",
        body:"Ut a iaculis nibh. Duis lectus lorem, interdum sit amet scelerisque ac, sodales quis risus. Maecenas bibendum leo sed diam finibus, sed tincidunt neque fringilla. Praesent ac pharetra nisl, quis blandit justo."
    },
    {
        title:"Ut a iaculis nibh",
        body:"Curabitur ac bibendum est. Donec est quam, mollis a quam nec, faucibus pellentesque urna. Quisque sit amet ultricies felis, at dictum turpis. Mauris blandit consectetur odio at congue. Curabitur eu est viverra, sodales ipsum quis, ultricies turpis. Ut condimentum tellus ut mi volutpat suscipit. Nullam ut nulla tortor. "
    },
    {
        title:"Curabitur ac bibendum est",
        body:"Phasellus id metus a mauris venenatis ullamcorper eu id urna. Sed et tellus id nunc pellentesque molestie a a lorem. Sed at vulputate tellus. Pellentesque euismod ac elit vel mollis. Maecenas malesuada, lectus ac blandit porttitor, lacus mauris ultricies quam, ut feugiat orci erat id nunc."
    }

]

function ProjectAccordian() {

    const [openId,setOpenId] = useState(null);
    // const [isThisOpen, setIsThisOpen] = useState(false);

    const recordAccId = (id) =>{
        if(id===openId) 
        setOpenId(-1);
        else
        setOpenId(id);
    }

  return (
    <section id="project-accordian-wrapper">
        {
            PROJECTS.map((project,index)=>{
                return <ProjectAccordianCard recordAccId={recordAccId} isOpen={index===openId} identity={index} project={project} key={index}/>
            })
        }
    </section>
  )
}

export default ProjectAccordian