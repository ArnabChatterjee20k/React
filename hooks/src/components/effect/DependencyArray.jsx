import { useEffect , useState } from 'react'

const DependencyArray = () => {
    const [input , setInput] = useState("")
    
    /**Without dependency array useEffect runs everytime the component is rendered.
    * useEffect(()=>{
        console.count("Component rendered!")
    })*/

    // With blank Dependency array useEffect runs only for the first initial time component got rendered
    // useEffect(()=>{
    //     console.count("Component rendered!")
    // },[])
    
    
    // run when input state has changed
    useEffect(()=>{
        console.count("Component rendered!")
    },[input])

    
    return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}

export default DependencyArray