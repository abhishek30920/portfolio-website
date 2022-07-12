import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import "./styles/Modal.css";

export default function Modal({open, children, onClose, sx, footer, title}) {
    const getModalContent = () => {
        return (
            <section className="My-Modal-Wrapper" style={{sx}}>
                <section className="My-Modal-Content-Wrapper">
        <section>{title}</section>
        {children}
        <section>
            {footer}
            <button onClick={onClose}>close</button>
        </section>
        </section>
    </section>
        )
    }

    if(open) {
        return ReactDOM.createPortal(getModalContent(), document.getElementById("My-Modal"));
    }
    return <></>
}