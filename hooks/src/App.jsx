// use state components
import StateComponent from "./components/state/StateComponent"

// use effect components
import EffectComponent from "./components/effect/EffectComponent"

// context api
import ContextComponent from "./components/Context/Basics/ContextComponent"
import ModularContextComponent from "./components/Context/Modular_and_Nested/ModularContextComponent"

function App() {
  return (
    <div className="App">
      {/* <StateComponent/> */}
      {/* <EffectComponent/> */}
      {/* <ContextComponent/> */}
      <ModularContextComponent/>
    </div>
  )
}

export default App
