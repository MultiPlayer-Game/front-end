import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"
import Moving from './components/clientMovement/Moving'
import { useDispatch } from 'react-redux';
import { getAllRooms } from '../src/actions/roomActions';
import './App.css'
import NavBar from './components/NavBar/navbar'

import World from "./components/world"

import { Switch, Route } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  dispatch(getAllRooms())
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={ClientLogin} />
        <Route exact path='/register' component={ClientRegistration} />
        <Route exact path='/game' component={World} />
      </Switch>

      {/* <canvas
        style={{ background: 'green', display: 'flex', margin: '0 auto' }}
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        onClick={e => {
          alert(e.clientX)
        }}
      /> */}
      {/* <World />
      <ClientRegistration /> */}
    </div>
  )
}
export default App