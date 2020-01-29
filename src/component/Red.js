import React, {useState} from 'react'
import Blue from "./Blue"
import {AppContext} from "./ContextApi"


export default function Red() {

    const [number, setNumber]= useState(23)
    const [text, setText] = useState("this is the text")

    const valueToStore= {number, setNumber, text, setText}
   
    return (
        <div>
            <div style={{backgroundColor:"red", height:"500px", width:"700px"}}>
            <p>{number}</p>
            <button onClick={()=> setNumber(prevCounter => prevCounter + 1)}> Change number</button>
                <AppContext.Provider value={valueToStore}>
                {/* <Blue number={number} text={text}/> */}
                <Blue />
                </AppContext.Provider>
            {/* <p>{number}</p>  */}
            
            </div>
        </div>
    )
}



