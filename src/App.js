import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamContainer"
import HooksIceCreamContainer from "./components/HooksIceCreamContainer"
import CakeContainerWithPayload from "./components/CakeContainerWithPayload"
import ItemContainer from "./components/ItemContainer"
import UserContainer from "./components/UserContainer"

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <CakeContainerWithPayload />
      <HooksCakeContainer />
      <hr/>
      <IceCreamContainer />
      <HooksIceCreamContainer />
      <hr/>
      <h1 style={{textAlign: 'center'}}>mapStateToProps and mapDispatchToProps with own props</h1>
      <ItemContainer cake />
      <ItemContainer iceCream />
      <hr/>
      <UserContainer/>
    </div>
  )
}

export default App