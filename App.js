import reactSvg from './react.svg'
import './App.css'

import React, { PureComponent } from 'react'
const domain = 'http://localhost:3001'

class App extends PureComponent {
  state = {
    teams: [],
    players: []
  }

  componentDidMount() {
    fetch(`${domain}/teams`)
      .then(response => {
        return response.json();
      })
      .then(teams => {
        this.setState({ teams })
      });

      fetch(`${domain}/players`)
      .then(response => {
        return response.json();
      })
      .then(players => {
        this.setState({ players })
      });
  }

  render() {
    const { teams, players } = this.state

    return <div className="App">
      <header className="App-heading App-flex">
        <h2>Bienvenido a la prueba de los equipos</h2>
      </header>
      <div className="App-teams App-flex">
        <h3>Los jugadores:</h3>

        {/* 
            TODO ejercicio 2
            Debes obtener los players en lugar de los equipos y pintar su nombre. 
            Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores
            y una lista con sus nombres. 
            ** Los comentarios de los ejercicios no los borres.
          */}
        {/* 
            <ul className="App-players">
              {players.map((player, index) => <li key={index} >{player.name}</li>)} 
            </ul>
          */}



        {/* 
          TODO ejercicio 3
          Vamos a pasar a darle diseño. Crea el diseño propuesto en el readme con los requerimientos que se necesite.
          Guiate por las imágenes.
        */}
        <div className="App-player-container">
          {players.map((player, index) => {
            const team = teams.find(team => team.id === player.teamId);
            return (
              <div className="App-player-card" key={index}>
                <img className="App-team-shield" src={team.shield} />
                <img className="App-team-player" src={player.img} />
                <p>
                  <span className="App-player-name">{player.name}&nbsp;</span>
                  <span className="App-player-position">{player.position}</span>
                </p>
                <p className="App-player-team">{team.name || ''}</p>
              </div>)
          })}
        </div>



      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={reactSvg}/>
        <p>Edit <code>src/App.js</code> and save to hot reload your changes.</p>
      </div>
    </div>
  }
}

export default App
