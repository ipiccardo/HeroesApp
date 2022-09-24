import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, onLogout } = useContext( AuthContext )

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
    onLogout('Iniciar Sesión')
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? "active" : "")
            }
            to="marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? "active" : "")
            }
            to="dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? "active" : "")
            }
            to="search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user?.name}</span>

          <button
            onClick={handleLogout}
            className="nav-item nav-link btn"
            to="login"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
