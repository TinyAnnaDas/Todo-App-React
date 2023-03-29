

function Todo({ toDos, setTodos, setEditTodo} ) {

    function handleComplete(obj){
        setTodos(
            toDos.map((item) => {
                if(item.id === obj.id){
                    return {...item, status:!item.status}
                }
                return item;
            })
        )
    }

    function handleEdit({id}){

        const findTodo = toDos.find((todo)=> todo.id === id)
        console.log(findTodo)
        setEditTodo(findTodo)

    }

  return (
    <div>
        <div className="todos">
            {
                
                toDos.map((obj, index)=>{
                    return(
                        <div className="todo" key={index}>
                            <div className="left">
                                {/* <input onChange={(e)=>{

                                    setTodos(toDos.filter(obj2=>{
                                    if (obj2.id === obj.id){
                                        obj2.status = e.target.checked
                                    }
                                    return obj2
                                    }
                                    
                                    ))
                                }} 
                                value={obj.status} type="checkbox" name="" id="" /> */}
                                <p style={{textDecoration: obj.status ? "line-through": ""}}> {obj.text}</p>
                            </div>
                            <div className="right">

                            <button className="button-complete">
                                <i className="fa fa-check-circle" onClick={()=> handleComplete(obj)}></i>
                            </button>
                            <button className="button-edit">
                                <i className="fa fa-edit" onClick={()=> handleEdit(obj)}></i>
                            </button>
                            <button className="button-delete">
                                <i onClick={(e)=>{setTodos(toDos.filter((obj2) => obj2.id !== obj.id ))}} className="fa fa-trash"></i>
                            </button>
                                
                            </div>
                        </div>
                    )
                })      
            }

            {/* { 
                toDos.map((obj, index)=>{
                if (obj.status){
                    return (<h1 key={index}>{obj.text}</h1>)
                }
                return null

                })
            } */}
        </div>    
    </div>
  )
}

export default Todo