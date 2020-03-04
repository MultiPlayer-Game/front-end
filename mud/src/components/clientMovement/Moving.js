import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import {useDispatch, useSelector} from 'react-redux'
import { title, description, players, error_msg, position } from '../../actions/roomActions'
import {move} from '../../actions/gameActions'
import './Moving.css'

const Moving = () => {
    const state = useSelector(state => state.player);
    console.log(state, 'state')
  


    const dispatch = useDispatch()
    
    const north = (n) => {
        dispatch(move(n))
        
        
        // .post('http://localhost:8000/api/adv/move/', { "direction": "n" })
        // .then(res => {
        //     console.log("LOOOK AT MEEEE",res.data)
        //     dispatch(players(res.data.players))
        //     dispatch(description(res.data.description))
        //     dispatch(title(res.data.title))
        //     dispatch(error_msg(res.data.error_msg))
        //     dispatch(position(res.data.position))
           
        // })
        // .catch(err => {
        //     console.log("something went wrong with the server ", err)
        // })
}
const south = (s) => {
    dispatch(move(s))

    
    
    // .post('http://localhost:8000/api/adv/move/', { "direction": "n" })
    // .then(res => {
    //     console.log("LOOOK AT MEEEE",res.data)
    //     dispatch(players(res.data.players))
    //     dispatch(description(res.data.description))
    //     dispatch(title(res.data.title))
    //     dispatch(error_msg(res.data.error_msg))
    //     dispatch(position(res.data.position))
       
    // })
    // .catch(err => {
    //     console.log("something went wrong with the server ", err)
    // })
}

const east = (e) => {
    dispatch(move(e))
    
    
    // .post('http://localhost:8000/api/adv/move/', { "direction": "n" })
    // .then(res => {
    //     console.log("LOOOK AT MEEEE",res.data)
    //     dispatch(players(res.data.players))
    //     dispatch(description(res.data.description))
    //     dispatch(title(res.data.title))
    //     dispatch(error_msg(res.data.error_msg))
    //     dispatch(position(res.data.position))
       
    // })
    // .catch(err => {
    //     console.log("something went wrong with the server ", err)
    // })
}
const west = (w) => {
    dispatch(move(w))
    
    
    // .post('http://localhost:8000/api/adv/move/', { "direction": "n" })
    // .then(res => {
    //     console.log("LOOOK AT MEEEE",res.data)
    //     dispatch(players(res.data.players))
    //     dispatch(description(res.data.description))
    //     dispatch(title(res.data.title))
    //     dispatch(error_msg(res.data.error_msg))
    //     dispatch(position(res.data.position))
       
    // })
    // .catch(err => {
    //     console.log("something went wrong with the server ", err)
    // })
}




    return(
        <div className="button-wrapper">
            <div className="moving-button" onClick={() => north({'direction':'n'})}>North</div>


            <div className="moving-button" onClick={() => south({'direction':'s'})}>South</div> 
            <div className="moving-button" onClick={() => east({'direction':'e'})}>East</div>
            <div className="moving-button" onClick={()=> west({'direction':'w'})}>West</div>
        </div>
    )
}

export default Moving