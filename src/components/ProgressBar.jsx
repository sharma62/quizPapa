import React from 'react'

function ProgressBar() {
    return (
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50"      aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{"width": '50%' } }></div>
        </div>
    )
}

export default ProgressBar
