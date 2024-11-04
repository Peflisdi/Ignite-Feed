import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import Avatar from '../Avatar/Avatar'
import Comment from '../Comment/Comment'
import './Post.css'
import { useState } from 'react'

export default function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana em!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0

  return (
    <article className='post'>
      <header>
        <div className="author">
          <Avatar hasBorder src={author.avatarUrl}/>
          <div className="authorInfo">
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedAtDateRelativeToNow}</time>
      </header>

      <div className='content'>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className='commentForm'>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty} >Comentar</button>
        </footer>

      </form>

      <div className="commentList">
        {comments.map(comment => {
          return ( 
            <Comment
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            /> 
          )
        })}
      </div>

    </article>
  )
}