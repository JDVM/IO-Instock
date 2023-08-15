import { Link } from "react-router-dom"
import logo from "../../assets/images/Logo/InStock-Logo_2x.png"
import "./Header.scss"


function Header() {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo for Instock Company"/>
            <nav className="header__nav">
                <Link className="header__warehouses header__active" to={`/Warehouses`}><div>Warehouses</div></Link>
                <Link className="header__inventory" to={`/Inventory`}><div>Inventory</div></Link>
            </nav>
        </header>
    )    
}

export default Header;