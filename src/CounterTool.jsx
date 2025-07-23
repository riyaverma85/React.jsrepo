
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";
const CounterTool=()=>{
    const data=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    return(
        <>
        <div>
            <h2>Counter App!!</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
        </>
    )
}
export default CounterTool;