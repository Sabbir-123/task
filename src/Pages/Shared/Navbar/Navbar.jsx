import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../../Context/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
          .then(swal("User Logged Out"))
          .catch((error) => swal(error.message));
      };
    const menuItems = (
        <>
         
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link to="/products">All Products</Link>
          </li>
          {user?.uid ? (
        <>
          <li>
            <button onClick={handleLogout}>SIGN OUT</button>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">SIGN IN</Link>
        </li>
      )}
         
        </>
      );
    return (
        <div>
            <div className="navbar whiteColor text-black flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow whiteColor rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
        <div>
        <h1 className='font-semibold'> Catalogue Management</h1>

        </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-8 py-0">{menuItems}</ul>
        </div>
      </div>

        </div>
    );
};

export default Navbar;