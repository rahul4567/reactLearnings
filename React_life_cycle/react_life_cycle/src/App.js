import "./App.css";
import Counter from "./counter";
import Header from "./componentUpdateLifeCyclePhase";

function App() {
  return (
    <div className="App">
      <Counter count="4" />
      <Header />
    </div>
  );
}

export default App;
