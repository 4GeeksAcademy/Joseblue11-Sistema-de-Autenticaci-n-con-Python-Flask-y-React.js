import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store } = useContext(Context);
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <img
            className="logo"
            src="https://yt3.googleusercontent.com/73Msdb-1LmWbH2LPOkyFw9nQFqTyh2LoY5A7EE7fjS96gig33N4ud0wQpVnZizA-vK1AQxlz=s160-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-outline-primary">home</button>
          </Link>
          {!store.user ? (
            <Link to="/profile">
              <button className="btn btn-outline-primary">Perfil</button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-outline-primary">
                  Iniciar Sesion
                </button>
              </Link>
              <Link to="/register">
                <button className="btn btn-outline-primary">
                  Registrarse{" "}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
