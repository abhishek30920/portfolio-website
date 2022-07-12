import React, {useState} from "react";

function Rough({folder}) {
    const [isOpen, setIsopen] = useState(false);

    const handleFolderClick=()=>{
        setIsopen(!isOpen);
    }
        if(folder.isFolder){
            return(
                <section>
                    <p onClick={handleFolderClick}>{folder.name}</p>
                    {isOpen ?
                    <section style={{paddingLeft:20}}>
                        {folder.items.map((item)=>{
                            return <Rough folder={item}/>
                        })}
                    </section>: <></>
                    }
                </section>
            )
        } else {
            return(
                <p>{folder.name}</p>
            )
        }
}

export default Rough;
