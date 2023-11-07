import React from 'react'
import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <div>
        <h1>Welcome to Message Page.</h1>
        <ul>
            <li><Link to="/message1/msg1">Message 1</Link></li>
            <li><Link to="/message2/msg2">Message 2</Link></li>
            <li><Link to="/message3/msg3">Message 3</Link></li>
        </ul>
    </div>
  )
}

export default Messages