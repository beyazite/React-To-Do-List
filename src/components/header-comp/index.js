import {useState} from 'react'

function Header({listItems,setListItems}) {
//  userInp gets its value from input text. 
 
  const [userInp,setUserInp] = useState(""); 
  const onChangeInput = (e) => {
    setUserInp(e.target.value);

  };
 
  // does not allow white space entries.
  const testInp = /(?!^ +$)^.+$/.test(userInp);
  

  // on submit of input , it adds new entry to current listItems and sets input are cleared. 
  const onSubmit = (e) => {
    e.preventDefault();

    if(testInp){
    setListItems([...listItems, { text: userInp, done: "active"}] );
    }
    setUserInp("");

  }
  return (
    <div className='head-cont'>
      <form onSubmit={onSubmit}>
        <input placeholder='What needs to be done?'  autoFocus onChange={onChangeInput} value={userInp} required/>
        <button className='add-button'>Add</button>
      </form>
    </div>
  )
}

export default Header;