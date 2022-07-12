import React, { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Quote from "./Quote/Quote"; 
import Tab from "@mui/material/Tab";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}

function Material() {
    const [value, setValue] = useState(0);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openModal = () =>{
        setIsModalOpen(true);
    }

    const handleCloseModal = () =>{
        setIsModalOpen(false);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>

            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Quote />
            </Modal>

            <p onClick={openModal}>Open Modal</p>
        </div>
    );
}

export default Material;
