import { USER_ACTION_TYPES } from './user.type'

const INITAL_STATE={
    CurrentUser:null
}



export const userReducer = (state=INITAL_STATE,action)=>{
    const {type, payload} = action;
    
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                CurrentUser:payload
            }
                
            default:
            return state;
    }
}


