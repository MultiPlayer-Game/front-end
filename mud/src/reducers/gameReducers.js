import {
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS,
    SAY_FAILURE,
    SAY_START,
    SAY_SUCCESS,
    GET_ROOMS_FAILURE,
    GET_ROOMS_START,
    GET_ROOMS_SUCCESS
} from '../actions/types'

const initialState = {
    loading: false,
    player: { uuid: '', user: '' },
    currentRoom: {},
    players: [],
    rooms: [],
    error: '',
    position:[1,1]
  };

  const gameReducers = (state = initialState, action) => {
    switch (action.type) {
      case INIT_SUCCESS:
        return {
          loading: false,
          player: {
            uuid: action.payload.uuid,
            user: action.payload.user,
          },
          currentRoom: {
            title: action.payload.title,
            description: action.payload.description,
          },
          players: action.payload.players,
          error: '',
        };
      case MOVE_SUCCESS:
        return {
          ...state,
          loading: false,
          currentRoom: {
            title: action.payload.title,
            description: action.payload.description,
            
          },
          players: action.payload.players,
          error: action.payload.error_msg,
          position: action.payload.position
        };
      case GET_ROOMS_SUCCESS:
        return {
          ...state,
          rooms: action.payload.rooms,
        };
      default:
        return state;
    }
  };
  //look at all these reducers
  export default gameReducers;