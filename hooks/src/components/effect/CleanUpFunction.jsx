import { useState , useEffect} from "react";

const CleanUpFunction = () => {
    const [toggle , settoggle] = useState(true)

    useEffect(() => {
      console.log("Effect runs")
      // toggle
      
      // clean up functions
      return () => {
        console.log("wait before running the effect , I should clean here")
        // clear something from previous effect
        console.log("done. you can run")
      }
    }, [toggle])
    
    return (
    <div>
      <button onClick={()=>settoggle(prev=>!prev)}>toggle</button>
    </div>);
};

export default CleanUpFunction