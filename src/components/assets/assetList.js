import React, {useContext, useEffect} from 'react';
import assetContext from '../../context/asset/assetContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import alertContext from '../../context/alerts/alertContext';
import Asset from './asset'

const AssetList = () => {

    const asContext = useContext(assetContext)
    const {assets, getAssets} = asContext

    const aContext = useContext(alertContext)
    const {alert} = aContext
    
    useEffect(() => {
        getAssets()
    }, [])

    if (assets.length === 0) return <p>No hay assets creados, comienza creando uno</p>

    return ( 
        <ul className ="list-assets">
            
            {alert? (<div className={`alerta ${alert.category}`}>{alert.msg} </div>)
                    :null}
            <TransitionGroup>
                {assets.map(asset => (
                    <CSSTransition
                        key={asset._id}
                        timeout={200}
                        classNames="asset"
                    >
                        <Asset 
                            asset={asset}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
                       
                        
        </ul>
     );
}
 
export default AssetList;