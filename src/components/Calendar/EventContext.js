import React,{useContext, useState} from "react";

let EventContext = React.createContext();

export function EventContextProvider({children}) {

    const [eventsRaw, setEventsRaw] = useState([]);
    const [formattedEvents, setFormattedEvents] = useState([])
    
    const value = {
        eventsRaw, 
        setEventsRaw,
        formattedEvents, 
        setFormattedEvents
    }

    return <EventContext.Provider value={value}>
        {children}
    </EventContext.Provider>
}