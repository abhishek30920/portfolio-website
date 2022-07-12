import React, {useState} from "react";

function FolderStructure({ folder }) {

    const [isOpen, setIsOpen] = useState(false);

    if (folder.isFolder) {
        return (
            <section style={{paddingLeft:15}}>
                <p onClick={()=>{setIsOpen(!isOpen)}}>{folder.name}</p>
                {isOpen ? folder.items.map((item, index) => {
                    return <FolderStructure key={index} folder={item} />;
                }): <></>}
            </section>
        );
    } else {
        return <p>{folder.name}</p>;
    }
}

export default FolderStructure;
