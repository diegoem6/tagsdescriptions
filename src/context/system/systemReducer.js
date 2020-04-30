import {
    ADD_SYSTEM, 
    GET_SYSTEMS,
    UPDATE_SYSTEM,
    SELECT_SYSTEM
} from '../../types/index'

export default (state, action) =>{
    switch (action.type){
        case ADD_SYSTEM:
            return ({
                ...state, 
                systems: [...state.systems, action.payload]
            })
        case GET_SYSTEMS:
            return ({
                ...state, 
                systems: action.payload
            })
        case UPDATE_SYSTEM:
            return ({
                ...state, 
                systemSelected:null
            })
        case SELECT_SYSTEM:
            return ({
                ...state, 
                systemSelected:action.payload
            })
        default:
            return state;
    }
}