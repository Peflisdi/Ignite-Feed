import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';


import './global.css'
import './App.css'
import Post from "./components/Post/Post";

export default function App() {

  return (
    <div>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <main>
          <Post />

        </main>
      </div>
    </div>
  )
}

