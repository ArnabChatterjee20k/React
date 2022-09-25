// use state components
import FunctionArg from "./components/state/FunctionArg"
import Initialisation from "./components/state/Initialisation"
import { ObjectUpdate } from "./components/state/ObjectUpdate"
import ChangingInputs_At_Once from "./components/state/ChangingInputs_At_Once"
import DerivedStates from "./components/state/DerivedStates"

// use effect components
import EffectComponent from "./components/effect/EffectComponent"
function App() {
  return (
    <div className="App">
      <EffectComponent/>
    </div>
  )
}

export default App
