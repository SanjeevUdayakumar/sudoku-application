import { useState } from "react";

const InputBox = ({value}) => {
  const [val,setVal] = useState(value)   
    return ( 
        <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} min={1} max={7} />
     );
}
 
export default InputBox;