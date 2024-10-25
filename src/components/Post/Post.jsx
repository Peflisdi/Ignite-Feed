import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import './Post.css'

export default function Post() {
  return (
    <article className='post'>
      <header>
        <div className="author">
          <Avatar hasBorder src="https://avatars.githubusercontent.com/u/84815310?v=4"/>
          <div className="authorInfo">
            <strong>Pedro Henrique</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime="2024-05-11 08:15:00">Públicado há 1h</time>
      </header>

      <div className='content'>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a></p>
      </div>

      <form className='commentForm'>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>

      </form>

      <div className="commentList">
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}