import React from 'react'
import walkSprite from './Toast.png'
import handleMovement from './movement'

import { connect } from 'react-redux'

function Player(props) {
    return (
        <div style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${walkSprite})`,
            backgroundPosition: '0 0',
            width: '40px',
            height: '40px',
            backgroundSize: 'contain'
        }} />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
}
export default connect(mapStateToProps)(Player)