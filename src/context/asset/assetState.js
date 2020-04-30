import React, {useReducer} from 'react';
import assetContext from './assetContext'
import assetReducer from './assetReducer'
import {
    FORM_ASSETS,      
    GET_ASSETS,       
    ADD_ASSET,       
    SHOW_ERROR_ASSET,
    VALIDATE_ASSET,  
    SELECT_ASSET,    
    DELETE_ASSET   } from '../../types/index'
import axiosClient from '../../config/axios'


const AssetState = props=>{
    
    
    const initialState={
        assets : [],
        form:false,
        error: false, 
        asset: null,
        message:null
    }

    //Dispatch para ejecutar las acciones
    const [state,dispatch] = useReducer(assetReducer, initialState)


    //defino las funciones para el CRUD de formularios
    const showForm =()=>{
        dispatch({
            type: FORM_ASSETS
        })
    }

    const getAssets = async ()=>{
        try {
            const res = await axiosClient.get('/api/assets');
            dispatch({
                type: GET_ASSETS,
                payload: res.data.assets
            })
        } catch (error) {
            const alert = {
                msg:"hubo un error buscando los assets",
                category:"alerta-error"
            }
            dispatch({
                type:SHOW_ERROR_ASSET,
                payload: alert
            })
        }
        
    }

    const addAsset = async asset =>{

        try {
            const res = await axiosClient.post('/api/assets',asset);
            dispatch({
                type: ADD_ASSET,
                payload: res.data
            })
        } catch (error) {
            const alert = {
                msg:"hubo un error creando el asset",
                category:"alerta-error"
            }
            dispatch({
                type:SHOW_ERROR_ASSET,
                payload: alert
            })
        }
        
        
    }

    const showError = () =>{
        dispatch({
            type: VALIDATE_ASSET
        })
    }

    const selectAsset= (asset) =>{
        dispatch({
            type: SELECT_ASSET,
            payload:asset
        })
    }

    const deleteAsset = async (asset) =>{
        try {
            const idAsset = asset._id
            
            await axiosClient.delete(`/api/assets/${idAsset}`);
            dispatch({
                type:DELETE_ASSET,
                payload:idAsset
            })
        } catch (error) {
            const alert = {
                msg:"hubo un error eliminando el asset",
                category:"alerta-error"
            }
            dispatch({
                type:SHOW_ERROR_ASSET,
                payload: alert
            })
        }
        
       
    }

    return (
        <assetContext.Provider
            value={{
                assets: state.assets,
                form: state.form,
                error: state.error,
                asset: state.asset,
                message: state.message,
                showForm, 
                getAssets,
                addAsset,
                showError, 
                selectAsset,
                deleteAsset
            }}
        >
            {props.children}
        </assetContext.Provider>
    )

}

export default AssetState;