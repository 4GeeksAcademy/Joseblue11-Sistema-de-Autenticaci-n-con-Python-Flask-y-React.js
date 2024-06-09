import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

const Landing = () => {
  return (
    <div className="Landing p-5">
      <div>
        <h1 className="title1 justify-counter-center">
          Sistema de Autenticacion
        </h1>
        <h3 className="rigo1">Bienvenido</h3>
      </div>
      <div>
        <div
          className="Part-First"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="card">
            <div className="card-body">
              <div
                className="container"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <h3 className="card-title">Sistema de Autenticacion JWT</h3>
                  <p className="card-text">
                    Es un método para simplificar la gestión de tokens de acceso
                    y autorización en aplicaciones web. Utiliza un formato
                    estándar (RFC 7519) para encapsular información de forma
                    compacta y autocontenida. <br />
                    El sistema JWT se basa en la creación de tokens que
                    contienen información sobre el usuario, la aplicación y los
                    permisos de acceso. Estos tokens se envían entre el cliente
                    y el servidor para verificar la identidad y autorizar las
                    acciones del usuario.
                  </p>
                </div>
                <div>
                  <img
                    style={{
                      float: "right",
                      borderRadius: "100pc",
                      width: "15vw",
                      padding: "5px",
                    }}
                    src="https://img.freepik.com/vector-gratis/tecnologia-clave-seguridad-biometrica-escaneo-facial_24908-56394.jpg?w=740&t=st=1717887688~exp=1717888288~hmac=0f95597c930f8e7d050059dbc10abb76455a1f406ad1ef59d195a2741eaa1dd7"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="Part-Second"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className="card border-light card-heading-section">
            <div className="card-body">
              <div
                className="container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <img
                    style={{
                      float: "left",
                      borderRadius: "100pc",
                      width: "15vw",
                      padding: "5px",
                    }}
                    src={rigoImage}
                    alt=""
                  />
                </div>
                <div className="">
                  <h3>Intrucciones del Sitio Web</h3>
                  <p className="card-text">
                    ¡Bienvenido a nuestra aplicación web! Para comenzar tu
                    experiencia, sigue estos sencillos pasos: 1. Registro:
                    Ingresa tu nombre completo y dirección de correo
                    electrónico. Crea una contraseña segura y fácil de recordar.
                    Haz clic en el botón "Registrar". 2. Inicio de sesión: Una
                    vez registrado, serás redirigido a la sección de inicio de
                    sesión. Ingresa el correo electrónico y la contraseña que
                    utilizaste durante el registro. Haz clic en el botón
                    "Iniciar". ¡Y listo! Ya has accedido a nuestra aplicación
                    web.¡Así de fácil! Recuerda que
                    siempre puedes volver a iniciar sesión cuando lo desees.
                    ¡Gracias por visitarnos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
