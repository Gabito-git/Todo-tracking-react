import useForm from "../hooks/useForm";

const FormTasks = ({ addTodo }) => {

    const [ { text, day, reminder }, handleInputChange, reset ] = useForm({ text:'', day:'', reminder: false });

    const handleSubmit = ( e ) => {
        e.preventDefault();

        addTodo( { text, day, reminder, id: new Date().getTime() } );
        reset();

    }

    return (
          <form onSubmit={ handleSubmit }>
            <div className="form__item">
                <label className="label">Task</label>
                <input 
                    type="text" 
                    placeholder="Add Task" 
                    className="input" 
                    name="text"
                    value={ text }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form__item">
                <label className="label">Day & Time</label>
                <input 
                    type="text" 
                    placeholder="Add Day & Time" 
                    className="input" 
                    name='day'
                    value={ day }
                    onChange={ handleInputChange }
                />
            </div>
            <div className="form__item form__item--check">
                <label className="checkbox">Set Reminder</label>
                <input 
                    type="checkbox" 
                    name="reminder"
                    checked={ reminder }
                    onChange={ handleInputChange }
                />
            </div>

            <button className="btn btn--submit">Save Task</button>
        </form>

    )
}

export default FormTasks
