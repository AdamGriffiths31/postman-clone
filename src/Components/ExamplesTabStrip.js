import React, { useState } from 'react'
import {Tabs, Tab} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Examples from './Tabs/Examples'
const ExamplesTabStrip = ({onInputSend})=> {


    return (
        <>
       
       <Tabs>
       <Tab eventKey="Examples" title="Examples"><Examples onInputSend={onInputSend}/></Tab>
       </Tabs >
       </>
    )
}

export default ExamplesTabStrip
