import Button from "./Button";

const Header = ({ setBtn, btnState }) => { 

    return (
        <header className="header">
            <h1 className="header__title">Task Tracker</h1>
            <Button
                setBtn={ setBtn }
                btnState={ btnState }
            />
            
        </header>
    )
}

export default Header
