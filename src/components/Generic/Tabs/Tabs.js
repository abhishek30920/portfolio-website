import React, { useState } from "react";
import TabContent from "./TabContent";
import TabItem from "./TabItem";
import TabPanel from "./TabPanel";
import "./styles/Tabs.css";

function Tabs() {
    const [activeTab, setActiveTab] = useState(1);

    // const handleTabClick = (e) => {
    //     console.log(e.target.id);
    //     setActiveTab(e.target.id);
    // }

    return (
        <section>
            <section>
                {/* <ul > === TabPAnel; li === TabItem   TabContent - wrapper children */    } 
                <TabPanel>
                    <TabItem title="Tab1" id={1} activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <TabItem title="Tab2" id={2} activeTab={activeTab} setActiveTab={setActiveTab}/>
                {/* </ul> */}
                </TabPanel>
            </section>
            <section id="tab-content">
                <TabContent id={1} activeTab={activeTab}>
                    <p>This is Tab 1</p>
                </TabContent>
                <TabContent id={2} activeTab={activeTab}>
                    <p>This is Tab 2</p>
                </TabContent>
            </section>
        </section>
    );
}

export default Tabs;
