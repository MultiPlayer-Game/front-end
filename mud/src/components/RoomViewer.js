import React from 'react';
import {useDispatch, useSelector} from 'react-redux'


export default function RoomViewer ()  {
    const state = useSelector(state => state);
    console.log(state, 'state')



    return(
        <div className="current-room" style={{
            color:'white',
            backgroundColor:'black',
            marginBottom: '20px',
            textAlign:'center'
        }}>    
            <h1>You are currently in:  {(state.game.currentRoom['title'])} </h1>
        </div>
    )
}

