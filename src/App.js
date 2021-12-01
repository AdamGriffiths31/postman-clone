import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from './Components/InputGroup' 
import TabStripRequest from './Components/TabStripRequest'         
import TabStripResponse from './Components/TabStripResponse'
const App=() =>{
  const [ response, setResponse ] = useState(null);
  return (
    <div className="app p-4">
        <TabStripRequest setResponse={setResponse}/>
        <br/>
        <TabStripResponse response={response}/>
    </div>
  );
}

export default App;
