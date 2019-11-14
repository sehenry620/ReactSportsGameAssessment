import React from 'react';
import './App.css';
import Game from './components/game/Game';
// import Team from './components/team/Team';
// import Scoreboard from './components/scoreboard/Scoreboard'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png'
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png'
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png'
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: 'https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png'
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

export default App;
