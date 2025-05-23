/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
<<<<<<< HEAD

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedEmojisList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiClicked = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiClicked) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
=======
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  /* state has 3 properties which specify top score, array of clicked emojis details and also 
    whether gave is over or not if same emoji is clicked/ not clicked respectively */
  state = {
    clickedEmojis: [],
    isGameEnd: false,
    topScore: 0,
  }

  /* a method that shuffles the emojis order randomly  */
  /* this method gets called each time a emoji is clicked since state gets
   updates each time a emoji is clicked. SO after every click emojis get shuffled randomly */
  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  /* a method for actions to happen when a emoji is clicked  */
  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(id)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
      }))
    }
  }

<<<<<<< HEAD
  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
=======
  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  restartGame = () => {
    this.setState({clickedEmojis: []})
    this.setIsGameEnd(false)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  /* a render application to display score once we win/lose the game  */
  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length
    /* we will be sending current score since it is to be displayed one score card is displayed */
    /* for onClick of play Again button "onClickPlayAgain" is passed so onv=ce the button is clicked 
    the game gets restated again keeping top score undisturbed  */
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  /* render emojis list method gets emojis shuffled list and display 
  each Emoji by sending data to EmojiCard */
  renderEmojiList = () => {
    const shuffledEmojiList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list">
        {/* each item should have a key. we use onClickEmoji method to get the id of clicked emoji from 
        Emoji Card files */}
        {shuffledEmojiList.map(emojiItem => (
          <EmojiCard
            key={emojiItem.id}
            emoji={emojiItem}
            onClickEmoji={this.onClickEmoji}
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
          />
        ))}
      </ul>
    )
  }

<<<<<<< HEAD
  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state

    return (
      <div className="main-container">
        <NavBar
          topScore={topScore}
          isGameInProgress={isGameInProgress}
          currentScore={clickedEmojisList.length}
        />
        <div className="emoji-body-container">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
=======
  /* main render method of EmojiGame application  */
  render() {
    const {isGameEnd, clickedEmojis, topScore} = this.state
    const currentScore = clickedEmojis.length
    return (
      <div className="app-container">
        {/* current score, top score and gameEnd status is passed to navbar */}
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameEnd={isGameEnd}
        />
        {/* if game is ended display whether wim/lose status or pif not play the game  */}
        <div className="emoji-body-container">
          {isGameEnd ? this.renderWinOrLose() : this.renderEmojiList()}
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
        </div>
      </div>
    )
  }
}

export default EmojiGame
