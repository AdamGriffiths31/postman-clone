import React from 'react'
import '../Tabs/Examples.css'
const Examples = ({onInputSend})=> {
    return (
        <div className="p-3 border-top-0 border">
                <div className="overflow-auto">
                <table>
                <tr>
                    <th>Description</th>
                    <th>API</th>
                    <th></th>
                </tr>
                <tr>
                <td>Generate a random user</td>
                <td>https://randomuser.me/api/</td>
                <button  className="btn btn-success" onClick={()=> onInputSend("https://randomuser.me/api/")} >Try</button>
                </tr>
                <tr>
                <td>Random fact about cats</td>
                <td>https://catfact.ninja/fact</td>
                <button  className="btn btn-success" onClick={()=> onInputSend("https://catfact.ninja/fact")} >Try</button>
                </tr>
                <tr>
                <td>USA population data</td>
                <td>https://datausa.io/api/data?drilldowns=Nation&measures=Population</td>
                <button  className="btn btn-success" onClick={(e)=>onInputSend("https://datausa.io/api/data?drilldowns=Nation&measures=Population")} >Try</button>
                </tr>
                </table>

                </div> 
        </div>
    )
}

export default Examples
