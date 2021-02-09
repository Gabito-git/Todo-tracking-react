
const Button = ({ setBtn, btnState }) => {
    
    return <button 
                className="btn"
                onClick={ () => setBtn( !btnState ) }
                style={{backgroundColor: btnState ? 'lightgreen':'red' }}
           >
               { btnState ? 'Close': 'Add' }
            </button>
}

export default Button
