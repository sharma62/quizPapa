import React from 'react'
import { useNavigate } from 'react-router-dom'

function Btn({btnName,onClick}) {
  useNavigate()
  return (
    <div>
      <button className='btn btn-primary p-2' onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default Btn
