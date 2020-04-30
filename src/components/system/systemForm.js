import React, {useContext, useState} from 'react';
import systemContext from '../../context/system/systemContext'
import assetContext from '../../context/asset/assetContext'


const SystemForm = () => {

    const sContext = useContext(systemContext)
    const {getSystems, systemSelected} = sContext

    const aContext = useContext(assetContext)
    const {asset} = aContext

    const [error, setError] = useState(false)
    const [tarea,setTarea] = useState({
        name:''
    })

    const {name} = tarea

    const onSubmit = (e)=>{
        e.preventDefault();
        if(name.trim()===''){
            setError(true)
            return;
        }
        setError(false);

    }
    const onChange = (e)=>{
        setTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }

    if (!asset) return null;

    return ( 
        <div className="formulario"
            onSubmit={onSubmit}>
            <form>
                <div 
                    className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre del sistema"
                        name="name"
                        value={name}
                        onChange = {onChange}
                    />
                </div>
                <div 
                    className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={systemSelected === null ? "Agregar sistema":"Guardar sistema"}
                    />
                </div>

            </form>
            {error ? <p className="mensaje error">El nombre del sistema es obligatorio</p> : null}
        </div>
     );
}
 
export default SystemForm;