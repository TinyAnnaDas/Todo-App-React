import {useState} from 'react'
import './App.css';


function App() {

  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState("")

  const handleEnterTodo = (e)=>{
    if(e.key === 'Enter' && toDo.trim() !== ''){
      setTodos([...toDos, {id:Date.now(), text:toDo.trim(), status:false }])
      setTodo('');
    }
    else if(e.type === 'click' && toDo.trim() !== ''){
      setTodos([...toDos, { text:toDo.trim(), status:false }])
      setTodo('');
    }
    
  }

  function getToday(){
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    return daylist[day]
  }
  
 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getToday()}! 🌝 ☕ </h2>
       
      </div>
      <div className="input">
        <input value= {toDo} onChange={(e)=>setTodo(e.target.value)} onKeyDown={handleEnterTodo} id="input" type="text" placeholder="🖊️ Add item..." />
        <i onClick={handleEnterTodo} className="fas fa-plus"></i>
        <i className="fas fa-calendar"></i>
        <i className="fas fa-clock"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj, index)=>{
            return(
              <div className="todo" key={index}>
                <div className="left">
                  <input onChange={(e)=>{

                    setTodos(toDos.filter(obj2=>{
                      if (obj2.id === obj.id){
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }
                      
                    ))
                  }} 
                  value={obj.status} type="checkbox" name="" id="" />
                  <p> {obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={(e)=>{
                    setTodos(toDos.filter(obj2=>{
                      return obj2.id !== obj.id
                    }))
                  }} className="fas fa-times"></i>
                </div>
              </div>
            )
          })      
        }

{ 
        toDos.map((obj, index)=>{
          if (obj.status){
            return (<h1 key={index}>{obj.text}</h1>)
          }
          return null

        })
      }
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default App;
