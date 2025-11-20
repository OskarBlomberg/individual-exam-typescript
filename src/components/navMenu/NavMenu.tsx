import "./navMenu.scss";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  return (
    <div className="navmenu">
      <div className="navmenu__img-container">
        <img src="src/assets/navicon.png" alt="menu" />
      </div>
      <nav className="navmenu__nav">
        <ul className="navmenu__list">
          <li className="navmenu__item">
            <Link className="navmenu__item__link" to="/booking">
              Booking
            </Link>
          </li>
          <li className="navmenu__item">
            <Link className="navmenu__item__link" to="/confirmation">
              Confirmation
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
