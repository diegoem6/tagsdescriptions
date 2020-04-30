import React, { useContext } from 'react';
import systemContext from '../../context/system/systemContext'

const System = ({system}) => {

    const sContext = useContext(systemContext)
    const {updateSystem, selectSystem} = sContext


    const deleteSystemOnClick = ()=>{

    }
    return ( 
        <li className="tarea sombra">
        <p>{system.nombre} </p>

        <div className="estado">
            {system.active 
            ?  
                (
                    <button
                        type="button"
                        className="completo"
                        onClick = {()=>updateSystem (system)}
                    >Activo</button>
                )
            : 
                (
                    <button
                        type="button"
                        className="incompleto"
                        onClick = {()=>updateSystem (system)}
                    >Desactivo</button>
                )
            }
        </div>

        <div className="acciones">
            <button 
                type="button"
                className="btn btn-primario"
                onClick = {()=>{selectSystem(system)}}
            >Editar</button>

            <button
                type="button"
                className="btn btn-secundario"
                onClick={deleteSystemOnClick}
            >Eliminar</button>
        </div>
    </li> 
     );
}
 
export default System;