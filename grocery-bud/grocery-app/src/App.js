import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    getLocalTodos()
  },[])
  useEffect(() => {
    saveLocalTodos()
  },[list])
  
   //Save to Local Storage
  const saveLocalTodos=()=>{
    localStorage.setItem('list', JSON.stringify(list))
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem('list')===null){
      localStorage.setItem('list', JSON.stringify([]))
    }
    else{
      const localList = JSON.parse(localStorage.getItem('list'))
      setList(localList)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      //display alert
      showAlert(true,'danger','Please Enter value!')
      // setAlert({show:true, msg:"Enter Value",type:"danger"});
    }
    else if(name && isEditing){
      setList(list.map((item)=>{
        if(item.id===editId){
          return {...item,title:name}
        }
          return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true,'success',"Value changed!")
    }
    else{
      //show alert
      showAlert(true,'success','Item in list')
      const newItem={id: new Date().getTime().toString(),title:name}
      setList([...list,newItem])
      setName('')
    }
      
    
  };
  const showAlert =(show=false,type="",msg="")=>{
    setAlert({show,type,msg})
  }

  const clearList =()=>{
    showAlert(true,'danger','Empty List')
    setList([])
  }

  const removeItem=(id)=>{
    showAlert(true,'danger','Item removed!')
    setList(list.filter(item=>item.id !== id))
  }
  const editItem=(id)=>{
    const specificItem=list.find((item)=>item.id === id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert}  removeAlert={showAlert} list={list}/>}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g egss"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length>0 && 
      (<div className="grocery-container">
        <List  items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={clearList}>Clear Items</button>
      </div>)
      }
      
    </section>
  );
}

export default App;
