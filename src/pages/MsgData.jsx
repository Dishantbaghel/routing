import React from 'react'
import { useParams } from 'react-router-dom'

const MsgData = () => {
    const params = useParams();
    const {msg} = params
  return (
    <div>{msg}</div>
  )
}

export default MsgData