import "./App.css";
import Counter from "./counter";
import Header from "./componentUpdateLifeCyclePhase";
import ComponentUnmout from "./componentUnmountingPhase";

function App() {
  return (
    <div className="App">
      <Counter count="4" />
      <Header />
      <ComponentUnmout />
    </div>
  );
}

export default App;
