import { NavLink } from "react-router-dom";
import Logo from '../../assets/LOGO.svg'

import "./navigation.css";

export default function Navigation() {
  return (
    <header className="header">
        <img src={Logo} className="header-logo" alt="logo"></img>
      <nav className="header-menu">
        <ul>
          <li >
            <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ""}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ""}>A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
