import Button from "./Button";
import { useLocation } from "react-router-dom";


const Header = ({ setBtn, btnState }) => {

    const location = useLocation();

    return (
        <header className="header">
            <h1 className="header__title">Task Tracker</h1>
            { location.pathname ==='/' && <Button
                                            setBtn={ setBtn }
                                            btnState={ btnState }
                                          />
            }
        </header>
    )
}

export default Header
