import React , {useState} from "react";

const Carddata=()=>{
    const [count, setCount] = useState(0);
    const inc=()=>{
        setCount(count+1);
    }
    const dec=()=>{
        if(count >0){
        setCount(count-1);
        }else{
            alert("count limit is  0")
        }
    }
    return(
        <>
            {/* <div className="main"> */}
            <div className="container">
                <button className="btn" onClick={dec}>Der</button>
                <h2 className="btn">{count}</h2>
                <button className="btn" onClick={inc}>Inc</button>
                <button className="btn" onClick={()=>{setCount(0)}}>Reset</button>
            </div>
     
            {/* </div> */}
        </>
    )
};

export default Carddata;