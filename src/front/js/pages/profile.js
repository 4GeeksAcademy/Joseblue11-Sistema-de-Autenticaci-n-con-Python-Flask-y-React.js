import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const Profile = ()=>{
    const {store,actions}= useContext(Context)
    console.log(store.user);
    return(
        <div className="container">
            <h1>Profile</h1>
            <p>Nombre: {store.user.name}</p>
            <p>Apellido: {store.user.last_name}</p>
            <p>email: {store.user.email}</p>
        </div>
    )
}
export default Profile