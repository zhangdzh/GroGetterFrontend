import React, { useEffect, useState } from 'react'
import AppContext from '../config';

function JsonDataDisplay(){
    const backendURL = 'zhangdzh.pythonanywhere.com';

    const [groc_dict, setGroc] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try {
                const fetchResponse = await fetch(`https://${backendURL}/groc/items/${AppContext.username}`);
                const groc_dictionary = await fetchResponse.json();

                setGroc(groc_dictionary);

            } catch (err) {
                console.log(err); 
            }
        }
        fetchData();
    }, [groc_dict]);

    const DisplayData=groc_dict.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.item}</td>
                    <td>{info.grocery_type}</td>
                    <td>{info.quantity}</td>
                    <td>{info.expiration_date}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table style={{border: "1px solid black", borderCollapse: "collapse", padding: "10vh"}} border="1">
                <thead class="thead-light"  style={{ background: "#FFD33C"}}>
                    <tr>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Item Name</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Item Type</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Quantity</th>
                        <th style={{border: "1px solid black", borderCollapse: "collapse", padding: "3vh"}} scope="col">Expiration Date</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;