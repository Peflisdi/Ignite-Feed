import { ThumbsUp, Trash } from 'phosphor-react'
import './Comment.css'
import Avatar from '../Avatar/Avatar'

export default function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className='comment'>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/84815310?v=4"/>

      <div className="commentBox">
        <div className="commentContent">
          <header className='commentHeader'>
            <div className="authorAndTime">
              <strong>Pedro Henrique</strong>
              <time dateTime="2024-05-11 08:15:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>24</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
