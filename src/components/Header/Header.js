import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo/InStock-Logo_2x.png";
import "./Header.scss";

function Header() {
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="header">
      <Link to={"/Warehouses"}><img className="header__logo" src={logo} alt="Logo for Instock Company" /></Link>
      <nav className="header__nav">
        <Link
          className={`header__warehouses ${
            isActiveLink("/Warehouses") ? "header__active" : ""
          }`}
          to={"/Warehouses"}
        >
          <div>Warehouses</div>
        </Link>
        <Link
          className={`header__inventory ${
            isActiveLink("/Inventory") ? "header__active" : ""
          }`}
          to={"/Inventory"}
        >
          {" "}
          <div>Inventory</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
