import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header >
        <div className={styles.author}>
          <Avatar src="https://github.com/jonathancsr.png" />
          <div className={styles.authorInfo}>
            <strong>Jonathan Candido</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time dateTime='2022-05-11 21:12:33' title='11 de Maio as 21:12h'>Publicado há 1h</time>
      </header>

      <main className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">👉 jane.design/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </main>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}