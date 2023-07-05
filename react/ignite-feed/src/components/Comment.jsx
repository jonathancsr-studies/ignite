import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jonathancsr.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Jonathan Candido</strong>
              <time dateTime='2022-05-11 21:12:33' title='11 de Maio as 21:12h'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}