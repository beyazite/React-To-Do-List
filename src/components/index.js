import React, {useState} from "react";
import Header from "./header-comp";
import List from "./list";
import Footer from "./footer";

function Index() {
  const [listItems, setListItems] = useState([
    { text: "Take Vitamin D3 before sleep.", done: "active"},
    { text: "Call Md. Mike at 3 pm.", done: "active"},
    { text: "Comb your wigs.", done: "active"}
  ]);


  // clear all list items , used in Footer with onClick. 
  const clearAll = () => {
    setListItems([])
   };


   // changes status as all, active and completed to list them as their status. onClick in Footer. 
   const [stat,setStat] = useState("all");
   
   const changeStat = (e) => {
    setStat(e.target.name);
  }

  
  return (
    <div className="main-cont">
        <Header listItems={listItems} setListItems={setListItems} />
        <List listItems={listItems} setListItems={setListItems} stat={stat} setStat={setStat} />
        <Footer listItems={listItems}  clearAll={clearAll}  changeStat={changeStat}/>

    </div>

  )
}

export default Index;