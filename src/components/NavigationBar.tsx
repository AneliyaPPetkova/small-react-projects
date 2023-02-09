import { NavLink } from 'react-router-dom';

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
       </ul>
    </nav>
 );
};

export default NavBar;