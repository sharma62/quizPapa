import React from 'react'

const Input = () => {
    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" name='username'/>
            </div>
        </>
    )
}

export default Input
