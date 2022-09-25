import { useEffect, useState } from "react";

const CleanUpExample = () => {
    const [number , setNumber] = useState(0)
    
    useEffect(() => {
      const id = setInterval(() => {
        console.log("incrementing")
        setNumber(prev_num => prev_num+1)
    }, 1000);
    
    // clean up functions
    return () => {
          console.log("deleting id")
          clearInterval(id)

      }
    }, [number])
    
    return <div>{number}</div>;
};

export default CleanUpExample;
