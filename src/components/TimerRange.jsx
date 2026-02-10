import React from 'react'

function TimerRange ({timeOut=0}) {
  return (
    <div className='text-bg-info p-3'>
      <p className={`text-center mt-3 `}> Time left : {timeOut}s </p>
    </div>
  )
}

export default TimerRange
