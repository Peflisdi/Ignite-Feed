import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


import './global.css'
import './App.css'
import Post from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/84815310?v=4',
      name: 'Pedro Henrique',
      role: 'Web Developer'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' }

    ],
    publishedAt: new Date('2024-10-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' }

    ],
    publishedAt: new Date('2024-10-25 18:00:00')
  }
]

export default function App() {

  return (
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}

