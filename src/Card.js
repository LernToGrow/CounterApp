import React, {useState} from "react";
import Carddata from "./Carddata";

const Card = ()=>{
    const [AddCounter, setAddCounter] = useState([]);
    return(
        <>
            <div className="container">
                <button className="btn" onClick={()=>{setAddCounter([...AddCounter,<Carddata/>])}}>+</button>
                <button className="btn" onClick={()=>{setAddCounter([0])}}>Reset</button>
            </div>
            <div className="content">
                {AddCounter}
            </div>
           
        </>
    )
};

export default Card;