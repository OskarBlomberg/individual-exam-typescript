import { useState } from "react";
import "./navMenu.scss";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisible = () => setIsVisible(!isVisible);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      toggleVisible();
    }
  };

  return (
    <div className="navmenu">
      <div
        className="navmenu__img-container"
        tabIndex={0}
        role="button"
        onClick={toggleVisible}
        onKeyDown={handleKeyDown}
      >
        <img src="src/assets/navicon.png" alt="menu" />
      </div>
      <nav className={`navmenu__nav ${isVisible ? "visible" : ""}`}>
        <ul className="navmenu__list">
          <li className="navmenu__item">
            <Link
              className="navmenu__item__link"
              to="/booking"
              onClick={toggleVisible}
            >
              Booking
            </Link>
          </li>
          <li className="navmenu__item">
            <Link
              className="navmenu__item__link"
              to="/confirmation"
              onClick={toggleVisible}
            >
              Confirmation
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
