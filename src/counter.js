import { useState } from "react"
import './style.css'

function Counter()
{
    var[count,setcount] = useState(0)

    function Increment()
    {
       var newcount = count + 1
       setcount(newcount)
    }

    function Decrement()
    {
        var newcount = count - 1
        setcount(newcount)
    }

    function Reset()
    {
      setcount(0)
    }
  return(
    <div className="number">
    <h1>{count}</h1>
    <button onClick={Increment} className="one">INCREMENT</button>
    <button onClick={Decrement} className="two">DECREMENT</button>
    <button onClick={Reset} className="three">RESET</button>
    </div>
  )
}

export default Counter