import React from "react";

function TabItem({ title, id, activeTab, setActiveTab }) {
    const handleTabClick = () => {
        setActiveTab(id)
    };
    return <div className={activeTab==id ? "active-tab" : ""} onClick={handleTabClick}>{title}</div>;
}

export default TabItem;
