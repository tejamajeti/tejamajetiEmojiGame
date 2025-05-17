// Write your code here.
<<<<<<< HEAD
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
=======

import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emoji, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emoji
    /* onClickEmojiItem sends clicked emoji id to EmojiGame main page  */
    const onclickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onclickEmojiItem}>
        <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
      </li>
    )
  }
>>>>>>> fe246337c632ab4ea4499ffb4bac6b91cce6e36f
}

export default EmojiCard
