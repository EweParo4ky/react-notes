import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav navbar-expand-lg'>
      <div className='navbar-brend m-1'>Notes App</div>

      <ul className='navbar-nav'>
        <li className='nav-item m-1'>
          <NavLink className='nav-link' aria-current='page' to='/' exact='true'>
            Notes
          </NavLink>
        </li>
        <li className='nav-item m-1'>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
        {/* <li className='nav-item m-1'>
          <NavLink className='nav-link' to='/edit'>
            Edit
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
