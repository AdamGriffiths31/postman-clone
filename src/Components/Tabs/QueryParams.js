import React from 'react'
import QueryParam from '../QueryParam'
import { v4 as uuidv4 } from 'uuid';


const QueryParams =({keyPairs,setQueryParams})=> {
    const onKeyPairAdd = () => {
        setQueryParams(keyPairs => [...keyPairs, {
        ID: uuidv4(),
          key: '',
          value: ''
        }])
      }
      const onKeyPairRemove = (keyPair) => {
          console.log([...keyPairs])
          console.log(keyPair)
        let newKeyValues = [...keyPairs];
        newKeyValues = newKeyValues.filter(x => x.ID !== keyPair.ID);
        console.log(newKeyValues)
        setQueryParams(newKeyValues);
      }
      const onKeyPairUpdate = (key) => {
        const elementIndex = keyPairs.findIndex(element => element.ID === key.ID);
        let newKeyValues = [...keyPairs];
        
        newKeyValues[elementIndex] = {
          ...newKeyValues[elementIndex], 
          key: key.key,
          value: key.value
        };
        
        setQueryParams(newKeyValues);
      };
      
    return (
        <>
        <div className="p-3 border-top-0 border">
        {keyPairs && keyPairs.map((param)=>{
            return(
            <QueryParam key={param.ID}data={param} setKeyPair={(pair) => onKeyPairUpdate(pair)} onKeyPairRemove={() => onKeyPairRemove(param)} />
            )
            
        })}
        <button data-add-query-param-btn className="mt-2 btn btn-outline-success" type="button" onClick={() => onKeyPairAdd()}>Add</button>
        </div>
        </>
    )
}

export default QueryParams
