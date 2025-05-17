// Write your code here.
<<<<<<< HEAD
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="score-details-container">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="your-score-status">{scoreLabel}</p>
        <p className="your-score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section-container">
        <img src={imgUrl} className="win-lose-image" alt="win or lose" />
      </div>
    </div>
  )
=======

import './index.css'
import {Component} from 'react'

/* on win an and on fail image urls */
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

class WinOrLoseCard extends Component {
  /** onClickPlayAgain is passed as a paramter to onClick event for play Again button */
  /** we get isWon status from EmojiGame main page  */
  render() {
    const {isWon, onClickPlayAgain, score} = this.props
    const imageURL = isWon ? winImage : loseImage
    const altText = isWon ? 'happyFace' : 'sadFace'
    const gameStatus = isWon ? 'You Won' : 'You Lose'
    const ScoreLabel = isWon ? 'Best Score' : 'Score'
    return (
      <div className="winOrLose-container">
        <div className="winOrLose-text-container">
          <h1 className="winOrLose-status">{gameStatus}</h1>
          <p className="winOrLose-label">{ScoreLabel}</p>
          <p className="winOrLose-current-score">{score}/12</p>
          <button
            className="winOrLose-button"
            type="button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
        <div className="winOrLose-image-container">
          <img className="win-or-lose-image" src={imageURL} alt={altText} />
        </div>
      </div>
    )
  }
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
}

export default WinOrLoseCard
