import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamContainer"
import HooksIceCreamContainer from "./components/HooksIceCreamContainer"
import CakeContainerWithPayload from "./components/CakeContainerWithPayload"

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <CakeContainerWithPayload />
      <HooksCakeContainer />
      <hr/>
      <IceCreamContainer />
      <HooksIceCreamContainer />
    </div>
  )
}

export default App