import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

const MainNav = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/adasd">Error</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
