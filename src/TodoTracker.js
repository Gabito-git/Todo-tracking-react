import { useEffect, useReducer, useState } from "react";
import Footer from "./components/Footer";
import FormTasks from "./components/FormTasks";
import Header from "./components/Header";
import TaskGroup from "./components/TaskGroup";
import todoReducer from "./reducer/todoReducer";


const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];
    
}

const TodoTracker = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);
    const [btnHeader, setBtnHeader] = useState(true) ; 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ])

    const addTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const deleteTodo = ( todoId ) => {
        dispatch({
            type: 'delete',
            payload: todoId
        })
    }

    const toggleReminder = ( todoId ) =>{        
        dispatch( {
            type: 'toggle',
            payload: todoId 
        } ) 
    }

    return (
        
            <div className='container'>

                <Header 
                    setBtn={ setBtnHeader }
                    btnState={ btnHeader }
                />
                
                {btnHeader && <FormTasks addTodo={ addTodo } />}
                { todos.length > 0 ?  <TaskGroup 
                                    todos={ todos } 
                                    deleteTodo={ deleteTodo }
                                    toggle={ toggleReminder }
                                />
                                : 'No tasks to show'
                }                
                
                <Footer />                
            </div>
       
    )
}

export default TodoTracker
