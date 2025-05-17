// Write your code here.
<<<<<<< HEAD
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-sub-container">
        <div className="logo-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
=======

import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  /* gets top score and current score from EmojiGame page */
  /* isGameEnd is used decide whether display navbar score card or not  */
  renderScores = () => {
    const {currentScore, topScore, isGameEnd} = this.props
    if (isGameEnd) {
      return null
    }
    return (
      <div className="Score-container">
        <p className="score-label">
          Score : <span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Total Score : <span className="score-value">{topScore}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="logo"
          />
          <p className="logo-title">Emoji Game</p>
        </div>
        {this.renderScores()}
      </div>
    )
  }
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
}

export default NavBar
