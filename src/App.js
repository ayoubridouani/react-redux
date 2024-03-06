import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamContainer"
import HooksIceCreamContainer from "./components/HooksIceCreamContainer"

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <hr/>
      <IceCreamContainer />
      <HooksIceCreamContainer />
    </div>
  )
}

export default App