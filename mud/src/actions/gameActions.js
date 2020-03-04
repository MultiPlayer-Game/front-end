import axiosWithAuth from '../utils/axiosWithAuth'

import {
    GET_ROOMS_FAILURE,
    GET_ROOMS_START,
    GET_ROOMS_SUCCESS,
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS,
    SAY_FAILURE,
    SAY_START,
    SAY_SUCCESS
} from './types'


///INITIALIZE
export const init = () => dispatch => {
  dispatch({ type: INIT_START });
  return axiosWithAuth()
  .get(`http://mud-03-02.herokuapp.com/api/adv/init`)
  .then(res => {
      console.log(res)

      dispatch({
          type: INIT_SUCCESS,
          payload: res.data.UserName
      });
  })
  .catch(err => {
      console.log(err)
      dispatch({
          type: INIT_FAILURE,
          payload: err
      });
  });
}

//MOVE
export const move = direction => dispatch => {
    dispatch({type: MOVE_START});
    return axiosWithAuth()
        .post('http://mud-03-02.herokuapp.com/api/adv/move/',  direction )
        .then(response => {
          console.log(response)
            dispatch({type: MOVE_SUCCESS, payload:response.data});
        })
        .catch(err => {
            dispatch({ type: MOVE_FAILURE, payload: err.response.data });
          });
}

//GET ALL ROOMS
export const getRooms = () => dispatch => {
    dispatch({type: GET_ROOMS_START});
    return axiosWithAuth()
      .get('http://mud-03-02.herokuapp.com/api/adv/getallrooms')
      .then(response => {
        dispatch({ type: GET_ROOMS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: GET_ROOMS_FAILURE,
          payload: ('error loading game rooms',err)
        });
      });
  };

//STRETCH: PUSHER
export const say = message => dispatch => {
    dispatch ({type: SAY_START})
    return axiosWithAuth()
      .post('api/adv/say/', { message })
      .then(res => {
        dispatch({ type: SAY_SUCCESS });
      })
      .catch(err => {
        dispatch({
          type: SAY_FAILURE,err
        });
      });
  };