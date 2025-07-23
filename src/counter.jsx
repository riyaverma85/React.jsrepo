// import { useState } from "react";
// const Counter=()=>{
//     const [count,setCount]=useState(0);

//     return(
//         <>
          
//           <div className="counter">
//           <h2>{count}</h2>
//           <button onClick={()=>{setCount(count+1)}} className="btn">Increment</button>
//           <button onClick={()=>{setCount(count-1)}}className="btn1">Decrement</button>
//           <button onClick={()=>setCount(0)} className="btn2">Reset</button>
//           </div>
//         </>
//     )
// }
// export default Counter;

//============================================APARTFUNCTION=====================================================================================================

import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        if(count==0)
        {
            alert("not less than 0!")
        }
        else{
        setCount(count-1);
        }
        
    }
    return(
        <>
          
          <div className="counter">
          <h2>{count}</h2>
          <button onClick={increment} className="btn">Increment</button>
          <button onClick={decrement}className="btn1">Decrement</button>
          <button onClick={()=>setCount(0)} className="btn2">Reset</button>
          </div>
        </>
    )
}
export default Counter;