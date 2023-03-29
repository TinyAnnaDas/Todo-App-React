import React, {useState, useEffect} from 'react'
import Todo from './Todo'

function Input() {

    const [toDo, setTodo] = useState("")
    const [toDos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    const updateTodo = (text, id, status) => {
        const newTodo = toDos.map((obj)=>obj.id === id ? {text, id, status} : obj)
        setTodos(newTodo)
        setEditTodo("")
    }

    useEffect(()=>{
        if(editTodo){
            setTodo(editTodo.text)
        }
        else{
            setTodo("")  
        }
    }, [setTodo,  editTodo])

    const handleEnterTodo = (e)=>{
   
            if(e.key === 'Enter' && toDo.trim() !== ''){

                if (!editTodo){
                    setTodos([...toDos, {id:Date.now(), text:toDo.trim(), status:false }])
                    setTodo('');
                }else{

                updateTodo(toDo, editTodo.id, editTodo.status)

                }
                
              }
            else if(e.type === 'click' && toDo.trim() !== ''){

                if (!editTodo){
                    setTodos([...toDos, { text:toDo.trim(), status:false }])
                    setTodo('');
                }else{
                    updateTodo(toDo, editTodo.id, editTodo.status)
                }

            }
      
      }
    //   useEffect(() => {
    //     console.log(toDos);
    //   }, [toDos]);
  return (
    <div>
        <div className="input">
            <input value= {toDo} onChange={(e)=>{ 
                // console.log(toDo)
                return setTodo(e.target.value)}} onKeyDown={handleEnterTodo} id="input" type="text" placeholder="🖊️ Add item..." />
            <i onClick={handleEnterTodo} className="fas fa-plus"></i>
            <i className="fas fa-calendar"></i>
            <i className="fas fa-clock"></i>
        </div>
        <div> <Todo toDos = {toDos} setTodos = {setTodos} setEditTodo = {setEditTodo}/></div>

       
    </div>
   
  )
}

export default Input