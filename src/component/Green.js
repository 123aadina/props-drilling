import React, {useContext} from 'react'
import {AppContext} from "./ContextApi"

export default function Green(props) {

    const valueToStore = useContext(AppContext)
    
    return (
        <div>
            <div style={{backgroundColor:"green", height:"200px", width:"300px",marginLeft:"100px",paddingTop:"90px"}}>
                {/* <p>{props.number}</p>
                <p style={{paddingTop:"100px"}}>{props.text}</p> */}
                <button onClick={()=> valueToStore.setNumber(prevCounter=> prevCounter+1)}>click to change</button>
                <p>{valueToStore.number}</p>
                <p>{valueToStore.text}</p>
            </div>
        </div>
    )
}
