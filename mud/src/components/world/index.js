import React, { useState, useEffect } from 'react'
// import Map from "../map"
import Player from "../player"
import Map from "../map/map"
import axios from 'axios';
import handleMovement from '../../components/player/movement'
import { connect } from 'react-redux'
import Moving from '../clientMovement/Moving'

import store from '../../store'
import RoomViewer from '../RoomViewer';

function World(props) {

    console.log("world")
    const [roomData, setRoomData] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://multi-user-dungeon-lambda.herokuapp.com/api/adv/getallrooms`
            )
            .then(res => {
                const rooms = res.data.rooms;
                console.log("Got room data from backend")
                setRoomData(rooms);
            })
            .catch(err => {
                console.log("Error")
            });
    }, [])

    return (
        <div
            style={{
                position: `relative`,
                width: `800px`,
                height: `400px`,
                margin: `20px auto`,
            }}>

            <RoomViewer />
            <Map roomData={roomData} />
            {/* <Player /> */}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(World)