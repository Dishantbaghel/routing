import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MsgData} from '../assets/MsgData'

const Messages = () => {
  const [msg,setMsg] = useState(MsgData)
  return (
    <div>
    <ul>
        <h1>Welcome to Message Page.</h1>
        {msg.map((item)=>(
          <div key={item.id}>
            <li ><Link to={`/Message/${item.id}`}>{item.title}</Link></li>
          </div>
        ))}
    </ul>
    </div>
  )
}

export default Messages