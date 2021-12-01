import React from 'react'

const InputGroup=({url,setUrl,onInputSend,setHttpMethod})=> {
    return (
        <div className="input-group mb-4">
            <select className="form-select flex-grow-0 w-auto" onChange={(e)=> setHttpMethod(e.target.value)}>
                <option value="GET" defaultValue>GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </select>
            <input required className="form-control" type="url" value={url} onChange={(e) => setUrl(e.target.value)}/>
            <button type="submit" className="btn btn-primary" onClick={(e)=> onInputSend(e)}>Send</button>
        </div>
    )
}

export default InputGroup
