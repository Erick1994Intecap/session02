import React, { useState } from "react";

export const MiPrimerEstado =() =>{
    const [nombre, setNombre] = useState("Erick");

    const cambiarNombre = e=>{
        setNombre("Erick Ruiz")
    }

    /*let nombre = "Erick";

    function cambiarNombre(){
        nombre="Erick Ruiz"
        console.log("Validacion")
    }*/

        return(
            <div>
                <h1>Componente: Mi primer estado</h1>
                <strong>{nombre}</strong><br></br>
                <button onClick={cambiarNombre}>Cambiar</button>
            </div>
        )

}