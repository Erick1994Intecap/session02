import React from "react";

export const TercerComponente = ({name, lastName, ficha})=>{
    return(
        <div>
            <h1>Ficha Medica</h1>
            <ul>
                <li>Nombre: {name}</li>
                <li>Apellido: {lastName}</li>
                <li>Alergias: {ficha.alergia}</li>
                <li>Gripo Sanguineo: {ficha.grupoSanguineo}</li>
            </ul>
        </div>
    )
};