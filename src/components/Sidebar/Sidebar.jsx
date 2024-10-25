import { PencilLine } from 'phosphor-react'

import './Sidebar.css'
import Avatar from '../Avatar/Avatar'

export default function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='cover' src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />
   
      <div className="profile">
        <Avatar src="https://avatars.githubusercontent.com/u/84815310?v=4"/>

        <strong>Pedro Henrique</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20} />Editar seu perfil</a>
      </footer>
   
    </aside>
  )
}