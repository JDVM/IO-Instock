import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo/InStock-Logo_2x.png";
import "./Header.scss";

function Header() {


  return (
    <header className="header">
      <Link to={"/Warehouses"}><img className="header__logo" src={logo} alt="Logo for Instock Company" /></Link>
      <nav className="header__nav">
        <NavLink
          className={`header__warehouses ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__warehouses"}`}
          to={"/Warehouses"}
        >
          <div>Warehouses</div>
        </NavLink>
        <NavLink
          className={`header__inventory ${({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "header__inventory"}`} to={"/Inventory"}
        >
          <div>Inventory</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
