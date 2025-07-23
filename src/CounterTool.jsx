
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./CounterSlice";
const CounterTool=()=>{
    const data=useSelector((state)=>state.counter.count)
    return(
        <>
        <div>
            <h2>Counter App!!</h2>
            <button onClick={increment()}>Increment</button>
            <button onClick={decrement()}>Decrement</button>
        </div>
        </>
    )
}
export default CounterTool;