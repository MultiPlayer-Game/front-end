// ///JUST PLAYING AROUND WITH MOVEMENT WITHOUT BACKEND
// //CAN DISREGARD

// import store from '../../store'
// import { SPRITE_SIZE } from './constants'

// //HIGHER ORDER FUNCTION
// export default function handleMovement(player) {
//     function getNewPosition(direction) {
//         const oldPos = store.getState().player.position
//         switch (direction) {
//             case 'WEST':
//                 return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
//             //moving 40 pixels to the left 
//             case 'EAST':
//                 return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
//             //moving 40 pixels to the right 
//             case 'NORTH':
//                 return [oldPos[0], oldPos[1] + SPRITE_SIZE]
//             //moving 40 pixels up 
//             case 'SOUTH':
//                 return [oldPos[0], oldPos[1] - SPRITE_SIZE]
//             //moving 40 pixels DOWN 
//         }
//     }

//     function directionMove(direction) {
//         store.dispatch({
//             type: 'MOVE_PLAYER',
//             payload: {
//                 position: getNewPosition(direction)
//             }
//         })
//     }

//     function handleKeyDown(e) {
//         e.preventDefault()

//         switch (e.keyCode) {
//             case 37:
//                 console.log("West")
//                 return directionMove('WEST')

//             case 38:
//                 console.log("North")
//                 return directionMove('NORTH')

//             case 40:
//                 console.log("SOUTH")
//                 return directionMove('SOUTH')

//             case 39:
//                 console.log("EAST")
//                 return directionMove('EAST')

//             default:
//                 console.log(e.keyCode)
//         }
//     }

//     window.addEventListener('keydown', (e) => {
//         handleKeyDown(e)
//     })

//     return player
// }