import { useState } from "react";

const FunctionArg = () => {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
 
  const increaseAsync = () => {
    setTimeout(() => {
        setNumber(cur_number=>cur_number + 1);
    }, 2000);
  };
  return(
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsync}>IncreaseAsync</button>
        <h1>{number}</h1>
    </div>
  ) ;
};

export default FunctionArg;
