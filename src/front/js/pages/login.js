import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const iniciar=async(e)=>{
    e.preventDefault()
    if(email==""){
      alert("falta Email")
    } else if (password==""){
      alert("falta el Password")
    } else {
      await actions.login(email,password)
      navigate("/profile")
    }
  }

  return (
    <div className="container">
      <h1> iniciar Session </h1>

      <div className="row">
        <div className="col">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            no compartiremos tu email con nadie mas
          </div>
        </div>
      </div>

      <br/>

      <div className="row">
        <div className="col">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </div>

      <br/>

      <div>
        <button className="btn btn-outline-success" onClick={(e)=>iniciar(e)} >
          Iniciar 
        </button>
      </div>
    </div>
  );
};
export default Login;
