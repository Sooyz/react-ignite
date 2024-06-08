import { Post } from "./components/Post";
import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css';
import Sidebar from "./components/Sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Sooyz.png',
      name: "Leonardo Marcoski",
      role: "Software Engineer"
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galeraa 👋"
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date('2024-06-06 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galeraa 👋"
      },
      {
        type: 'paragraph',
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt:  new Date('2024-06-07 10:00:00'),
  }
];

export function App() {
  return (
    <>
      <Header/>
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

