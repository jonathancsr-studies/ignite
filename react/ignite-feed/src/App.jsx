import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/jonathancsr.png",
      name: "Jonathan Candido",
      role: "Senior Developer"
    },
    content: [
      {
        type: 'paragraph', content:
          'Fala galeraa 👋'
      }, {
        type: 'paragraph', content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link', content:
          '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-07-01 12:11:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/zenorocha.png",
      name: "Zeno Rocha",
      role: "Founder & CEO @Resend"
    },
    content: [
      {
        type: 'paragraph', content:
          'Fala galeraa 👋'
      }, {
        type: 'paragraph', content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link', content:
          '👉 jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-07-02 21:12:33'),
  },
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>

      </div>
    </>
  )
}

export default App
