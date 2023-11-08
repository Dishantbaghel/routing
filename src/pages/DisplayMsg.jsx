import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MsgData } from '../assets/MsgData';

const DisplayMsg = () => {
    const[filterMsg,setFilterMsg] =useState('');
    const {msgId} = useParams();

    useEffect(()=>{
        const singleMsg = MsgData.find((item)=>item.id === parseInt(msgId))
        setFilterMsg(singleMsg)
    },[msgId])

  return (
    <div>
        <h1>{filterMsg ? filterMsg.message : "errro"}</h1>
    </div>
  )
}

export default DisplayMsg