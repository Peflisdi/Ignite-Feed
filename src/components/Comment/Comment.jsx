import { ThumbsUp, Trash } from 'phosphor-react'
import './Comment.css'

export default function Comment() {
  return (
    <div className='comment'>
      <img src="https://avatars.githubusercontent.com/u/84815310?v=4" alt="" />

      <div className="commentBox">
        <div className="commentContent">
          <header className='commentHeader'>
            <div className="authorAndTime">
              <strong>Pedro Henrique</strong>
              <time dateTime="2024-05-11 08:15:00">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
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
