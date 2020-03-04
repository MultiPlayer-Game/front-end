import {
    DESCRIPTION,
    TITLE,
    ERROR_MSG,
    POSITION,
    PLAYERS
} from '../actions/types';

  const initialState = {
    title: "",
    description: "",
    players: [],
    error_msg: "",
    position:[1,1]
  }
const roomReducer = (state = initialState, action) =>
    
    
 {
    switch(action.type) {
        case TITLE:
            return {...state} = action.payload;
            
        case DESCRIPTION:
            return {...state = action.payload};
        case PLAYERS:
            return {...state = action.payload};
        case ERROR_MSG:
            return {...state = action.payload};
        case POSITION:
        console.log("OOOOOEEEEEE",action.payload)
         return {...state, 
            position: action.payload};
           
        default:
         return state
    }
}

export default roomReducer