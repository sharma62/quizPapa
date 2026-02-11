import React from 'react'

const Input = ({name,setName}) => {
    
    
    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">@</span>
                <input 
                type="text"
                className="form-control" 
                placeholder="Email" 
                aria-label="Username" 
                aria-describedby="addon-wrapping" 
                name='username'
                value={name}
                onChange={((e)=>setName(e.target.value))} />
            </div>
        </>
    )
}

export default Input
