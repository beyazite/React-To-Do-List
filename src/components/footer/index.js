import React, {useState} from 'react'
/* 
   span gives how many items we have on our list(all list items)
   buttons set new status to map elements depends on their activeness. 
   last button clears all elements from list.
*/
function Footer({listItems,clearAll,changeStat}) {
  

  

  return (
    <div className='foot-cont'>
      

          <span className='to-do-count'><strong>{listItems.length}</strong> items left.</span>
          <br/>
          <div className='buttons-cont'>
          <button name="all" onClick={changeStat}>All</button>
          <br/>
          <button name="active" onClick={changeStat}>Active</button>
          <br/>
          <button name="completed" onClick={changeStat}>Completed</button>
          <br/>
          <button className='clear-completed' onClick={clearAll}>Clear All</button>
          </div>
          
        
    </div>
  )
}

export default Footer;