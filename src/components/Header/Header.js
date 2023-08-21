import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo/InStock-Logo_2x.png";
import "./Header.scss";

function Header() {


  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/Warehouses"}><img className="header__logo" src={logo} alt="Logo for Instock Company" /></Link>
        <nav className="header__nav">
          <NavLink
            className={`header__warehouses ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__warehouses"}`}
            to={"/Warehouses"}
          >
            <div className="header__text">Warehouses</div>
          </NavLink>
          <NavLink
            className={`header__inventory ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__inventory"}`} to={"/Inventory"}
          >
            <div className="header__text">Inventory</div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
