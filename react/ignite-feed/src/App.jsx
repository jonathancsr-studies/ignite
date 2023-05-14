import { Post } from "./Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import './global.css'

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post author="Jane Cooper" content="Fala galeraa 👋
Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" />
          <Post author="jonathan" content="sjadhuahsihd iuashdui hasuihdu ihsaui dhsa" />

        </main>

      </div>
    </>
  )
}

export default App
