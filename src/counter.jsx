import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    //const increment=()=>{
    //     setCount(count+1);
    // }
    // const decrement=()=>{
    //     if(count==0)
    //     {
    //         alert("not less than 0!")
    //     }
    //     else{
    //     setCount(count-1);
    //     }
        
    // }
    return(
        <>
          <h1>Counter App!!</h1>
          <h2>{count}</h2>
          <button onClick={()=>{setCount(count+1)}}>Increment</button>
          <button onClick={()=>{setCount(count-1)}}>Decrement</button>
          <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
export default Counter;