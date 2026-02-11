import React from 'react'
 
function Btn({btnName,onClick,color="primary"}) {

  return (
    <div>
      <button className={`btn btn-${color} p-2`} onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default Btn
