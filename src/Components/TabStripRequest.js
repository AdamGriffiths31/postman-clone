import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import QueryParams from './Tabs/QueryParams'
import InputGroup from './InputGroup'
import ResponseBody from './Tabs/ResponseBody';
import axios from 'axios';
import ExamplesTabStrip from './ExamplesTabStrip'

const keyPairsInitial=[
    {
        ID: uuidv4(),
        key:'',
        value:'',
    }
]
const TabStripRequests = ({setResponse})=> {
    const [ url, setUrl ] = useState('https://jsonplaceholder.typicode.com/todos/1');
    const [ httpMethod, setHttpMethod ] = useState('GET');
    const [ queryParams, setQueryParams ] = useState(keyPairsInitial);
    const [ headers, setHeaders ] = useState(keyPairsInitial);
    const [ doc, setData ] = useState('{\n\n}')
    const requestBody = doc.toString();
    const convertKeyValueToObject = (keyPairs) => {
        return [...keyPairs].reduce((data, pair) => {
        const key = pair.key;
        const value = pair.value;
        if(key === '') return data;
        return {
            ...data, [key]: value
        }
        }, {})
    }

    const handleSend = async (e) => {
        console.log(url)
            const response = await axios({
            url: url,
            method: httpMethod,
            params: convertKeyValueToObject(queryParams),
            headers: convertKeyValueToObject(headers),
            requestBody
            
        })
        setResponse(response);
    }

    const handleSendExample = async (e) => {
        console.log(e)
            const response = await axios({
            url: e,
            method: "GET"
            
        })
        setResponse(response);
    }

    return (
        <>
       <InputGroup url={url}onInputSend={handleSend} setUrl={setUrl} setHttpMethod={setHttpMethod}/>
       <ExamplesTabStrip onInputSend={handleSendExample}/><br/>
       <Tabs>
       <Tab eventKey="Query Params" title="Query Params"><QueryParams keyPairs={queryParams} setQueryParams={setQueryParams}/></Tab>
       <Tab  eventKey="Headers"title="Headers"><QueryParams keyPairs={headers} setQueryParams={setHeaders}/></Tab>
       {/* <Tab eventKey="JSON" title="JSON"><ResponseBody doc={doc} setDoc={setData}/></Tab> */}
       </Tabs >
       </>
    )
}

export default TabStripRequests
