import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Landing = () => {
  return (
    <div className="Landing">
      <div>
        <div>
          home
        </div>
        <h1 className="title1 justify-counter-center">
          Sistema de Autenticacion
        </h1>
        <h3 className="rigo1">Bienvenido!</h3>
      </div>

    </div>
  );
};
export default Landing;
