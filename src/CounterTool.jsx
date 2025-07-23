
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./CounterSlice";
const CounterTool=()=>{
    const data=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    return(
        <>

        <h2 id="top">Counter App!!</h2>
        <div className="counter">
            
            <h3>{data}</h3>
            <button onClick={()=>{dispatch(increment())}} className="btn">Increment</button>
            <button onClick={()=>{dispatch(decrement())}} className="btn1">Decrement</button>
            <button onClick={()=>{dispatch(reset())}} className="btn2">Reset</button>
        </div>
        </>
    )
}
export default CounterTool;