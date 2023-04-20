import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              //this below will make the link of the selected route as active
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adasd"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Error
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
