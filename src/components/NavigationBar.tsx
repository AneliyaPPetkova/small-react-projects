import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/birthday-reminder">Birthday Reminder</NavLink>
        </li>
        <li>
          <NavLink to="/tours">Tours</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/slider">Slider</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
