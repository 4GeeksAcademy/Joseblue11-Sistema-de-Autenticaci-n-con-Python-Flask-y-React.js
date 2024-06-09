import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/profile.css";

const Profile = () => {
  const { store, actions } = useContext(Context);
  console.log(store.user);
  return (
    <div className="profile justify-content-center">
      <h3 className="rigo1 d-flex justify-content-center">
        Bienvenido {store.user.name}
      </h3>
      <div className="d-flex justify-content-center">
        <div
          className="card d-flex justify-content-center"
          style={{ width: "20rem" }}
        >
          <div className="d-flex justify-content-center">
            <img
              src={rigoImage}
              alt=""
              className="img-fluid"
              style={{
                borderRadius: "50%",
                width: "200px",
              }}
            />
          </div>

          <div className="card-body">
            <h5>
              <p>
                {store.user.name} {store.user.last_name}
              </p>
            </h5>
            <p>{store.user.email}</p>
            <p className="card-text">
              En tiempos de crisis la imaginación es más efectiva que el
              intelecto
              <br />
              La Creatividad es pensar en nuevas ideas y la Innovación es hacer
              cosas nuevas
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="card1  ">
          ¿Quieres volver al inicio o cerrar sesión? ¡Te damos dos opciones
          sencillas! 1. Icono de inicio: Ubica el icono de inicio en la parte
          superior izquierda de la página. Simplemente haz clic en él para
          volver a la página principal de nuestro sitio web. 2. Menú desplegable
          (perfil): Haz clic en tu foto de perfil o nombre de usuario (ubicado
          en la parte superior derecha de la página). Se desplegará un menú con
          varias opciones. Selecciona la opción "Cerrar sesión" para finalizar
          tu sesión actual. ¡Así de fácil! Recuerda que siempre puedes volver a
          iniciar sesión cuando lo desees. ¡Gracias por visitarnos!
        </p>
      </div>
    </div>
  );
};
export default Profile;
