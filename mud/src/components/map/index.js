import React from 'react'
import  map  from './scene.png'


function Map(props) {
    return (
        <div
            style={{
                position: `relative`,
                top: `0px`,
                left: `0px`,
                width: `800px`,
                height: `600px`,
                backgroundImage: `url(${map})`,
                backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                border: `4px solid white`
            }}
        />
    )
}

export default Map