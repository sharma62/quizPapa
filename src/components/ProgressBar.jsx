import React from 'react'

function ProgressBar({totalQestion,currIdx}) {
     const percent = (currIdx*100)/totalQestion
     console.log(percent)
     return (
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50"   aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{"width": `${percent}%` } }>{percent}% </div>
        </div>
    )
}

export default ProgressBar
