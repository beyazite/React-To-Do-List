import {useState} from 'react';
import './list.css';

function List({listItems,setListItems,stat,setStat }) {

  // depends on listItems' activeness, we filter them to map them according to the button we click and their status.
  const allFilter =  listItems.filter(item => item.hasOwnProperty("done"));
  const actFilter = listItems.filter(item => item["done"] === "active");
  const compFilter = listItems.filter(item=>item["done"] === "inactive");
   
  
  
  return (
    <div className='list-cont'>
      

       <ul className='todo-list'>
      
      
      {
    // if stat is active(clicked on active button), we map items which have done: active key value pair. if else stat === completed and else for all items.  
        stat === "active"
        ? actFilter.map((item,i)=>  
 

// on click to our list item we store our listItems in a new array, then change clicked item's done key to inactive, then set newArray to listItems.   
        <li key={i} >
        <input checked={false} className='liInput' 
            onClick={() => {
              const newArray = [...listItems]
              newArray[i].done = "inactive"
             setListItems([...newArray]) }} 
        type="checkbox" id={i}/>
        <label  htmlFor={i}>
         {item.text}
        </label>
{/* on click to our button, we store listItems to newArray, then remove chosen item from newArray and set newArray to listItems. */}
        <button onClick={() => { 
             const newArray = [...listItems]
             newArray.splice(i,1)
             setListItems([...newArray])}
        }>
          X
        </button>
        </li>         
        )

       : stat === "completed"
       ? compFilter.map((item,i)=>  
       <li key={i}>
      <input className='liInput' checked={true} 
         onClick={() => {
            const newArray = [...listItems]
            newArray[i].done = "active"
            setListItems([...newArray]) }} 
         type="checkbox"   id={i}/>
      <label htmlFor={i}>
       {item.text}
      </label>
      <button onClick={() => { 
        const newArray = [...listItems]
        newArray.splice(i,1)
        setListItems([...newArray])}
      }>
        X
      </button>
      </li>
      )

      : allFilter.map((item,i)=>  
      <li key={i}>
       {/* set checkbox checked if a member of all items are completed/inactive, otherwise unchecked(false). */} 
       {/* on change of an item check if it is acitve or completed. then give its new done value */}
      <input className='liInput' checked={allFilter[i].done === "inactive" ? true : false}
       onChange={() => {
         const newArray = [...listItems]
         newArray[i].done === "active" ? newArray[i].done = "inactive" : newArray[i].done = "active"
         setListItems([...newArray]) }} 
      type="checkbox"  id={i}/>
      <label htmlFor={i}>
         {item.text}
      </label>
      <button className="killerButton" onClick={() => { 
        const newArray = [...listItems]
            newArray.splice(i,1)
            setListItems([...newArray])}
      }>
        X
      </button>
      </li>
      )
    
                                   
      }

     </ul>
        
      

       

        
      


     
    {/* keep track of listItems on console
      
          {console.log(listItems)}

    */}



    </div>
  )
}

export default List;