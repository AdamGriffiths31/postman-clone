import React,{useState,useEffect} from 'react'

const QueryParam =({data,setKeyPair,onKeyPairRemove})=> {
    const [keyValue, setKeyValue] = useState(data);
    const [debouncedKeyValue, setDebouncedKeyValue] = useState(keyValue);

    const handleOnChange = (e) => {
        setKeyValue((prevState) => ({
          ...prevState,
          ID: keyValue.ID,
          [e.target.name] : e.target.value
        }));
      }

      useEffect(()=> {
    
        const timerId = setTimeout(() => {
          setDebouncedKeyValue(keyValue);
        }, 1000);
    
        return () => {
          clearTimeout(timerId);
        }
    
      }, [keyValue]);
    
    
      useEffect(() => {
    
        setKeyPair(debouncedKeyValue);
    
      }, [debouncedKeyValue])
    
    return (
        <>
        <div className="input-group my-2" data-key-value-pair>
        <input type="text"  className="form-control" name="key" placeholder="Key"onChange={(e) => handleOnChange(e)}></input>
        <input type="text"  className="form-control" name="value" placeholder="Value"onChange={(e) => handleOnChange(e)}></input>
        <button type="button" className="btn btn-outline-danger" onClick={()=> onKeyPairRemove(data)}>Remove</button>
      </div>
      </>
    )
}

export default QueryParam
