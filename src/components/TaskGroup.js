import TaskItem from "./TaskItem";

const TaskGroup = ({ todos, deleteTodo, toggle }) => {

    return (
        <div className="tasks">
            {
                todos.map( todo =>{
                   
                    return <TaskItem 
                                key = { todo.id }
                                todo={ todo }
                                deleteTodo={ deleteTodo }
                                toggle={ toggle }
                            />                    
                } )
            }
        </div>
    )
}

export default TaskGroup
