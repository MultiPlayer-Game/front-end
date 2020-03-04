import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducers from './gameReducers';
import playerReducer from './playerReducer';
import roomReducer from './roomReducer'

export default combineReducers({
    auth: authReducer,
    game: gameReducers,
    player: playerReducer,
    room: roomReducer
});