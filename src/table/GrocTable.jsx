import React from 'react'

function JsonDataDisplay(){
    // const DisplayData=JsonData.map(
    //     (info)=>{
    //         return(
    //             <tr>
    //                 <td>{info.id}</td>
    //                 <td>{info.name}</td>
    //                 <td>{info.city}</td>
    //             </tr>
    //         )
    //     }
    // )
 
    return(
        <div>
            <table style={{border: "1px solid black", borderCollapse: "collapse", padding: "10vh"}} border="1">
                <thead class="thead-light">
                    <tr>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Item Name</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Item Type</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Quantity</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Expiration Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">cookie</td>
                        <td>snacks</td>
                        <td>1</td>
                        <td>5/20/23</td>
                    </tr>
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;