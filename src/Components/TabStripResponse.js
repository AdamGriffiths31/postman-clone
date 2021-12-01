import React, { useState,useEffect  } from 'react'
import {Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResponseBody from './Tabs/ResponseBody'


const TabStripResponse = (response )=> {
    const [ data, setData ] = useState('{}');
    useEffect(() => {
        if(response === null) return;
        if(response.response=== null) return;
        if(response.response.data=== null) return;
        const jsonResponse = JSON.stringify(response.response.data, null, 2);
        console.log(jsonResponse)
        setData(jsonResponse);
      }, [response])
    return (
        <>
       <Tabs>
       <Tab eventKey="Response Body" title="Response"><ResponseBody doc={data} setData={setData}/></Tab>
       </Tabs >
       </>
    )
}

export default TabStripResponse
