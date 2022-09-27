// use state components
import StateComponent from "./components/state/StateComponent"

// use effect components
import EffectComponent from "./components/effect/EffectComponent"

// context api
import ContextComponent from "./components/Context/Basics/ContextComponent"
import ModularContextComponent from "./components/Context/Modular_and_Nested/ModularContextComponent"

// use ref
import RefComponent from "./components/ref/RefComponent"

// use memo
import { MemoComponent } from "./components/memo/MemoComponent"

// useCallback
import CallbackComponent from "./components/Callback/CallbackComponent"
function App() {
  return (
    <div className="App">
      {/* <StateComponent/> */}
      {/* <EffectComponent/> */}
      {/* <ContextComponent/> */}
      {/* <ModularContextComponent/> */}
      {/* <RefComponent/> */}
      {/* <MemoComponent/> */}
      <CallbackComponent/>
    </div>
  )
}

export default App
