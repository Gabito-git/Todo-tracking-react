import { FaTimes } from "react-icons/fa";

const TaskItem = ( { todo:{ text, day, id, reminder }, deleteTodo, toggle }) => {

    return (
        <div 
            className={`task-item ${ reminder && 'border-left' }`}
            onDoubleClick = { () => toggle( id ) }
        >
            <h4>{ text } <FaTimes 
                            onClick={ () => deleteTodo( id ) }
                            style={{ color: 'red', cursor: 'pointer' }} 
                        />
            </h4>
            <p>{ day }</p>
        </div>
    )
}

export default TaskItem
