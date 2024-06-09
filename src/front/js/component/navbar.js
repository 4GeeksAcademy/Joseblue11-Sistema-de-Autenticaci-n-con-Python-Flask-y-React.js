import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handlerOut = () => {
    localStorage.removeItem("token");
    actions.logout();
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <Link to="/">
            <img
              className="logo"
              src="https://yt3.googleusercontent.com/73Msdb-1LmWbH2LPOkyFw9nQFqTyh2LoY5A7EE7fjS96gig33N4ud0wQpVnZizA-vK1AQxlz=s160-c-k-c0x00ffffff-no-rj"
            />
          </Link>
        </div>
        <div className="ml-auto d-flex">
          {store.user.name ? (
            <>
              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  profile
                </button>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "transparent" }}
                >
                  <li onClick={handlerOut}>
                    <button className="btn btn-outline-primary">logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-primary">
                  Iniciar Sesion
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-primary">
                  Registrarse
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
