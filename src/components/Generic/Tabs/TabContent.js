import React from 'react'

function TabContent({id, children,activeTab}) {
  if(id==activeTab)  
  return (
    <div>
        {children}
    </div>
  )

  return null;
}

export default TabContent