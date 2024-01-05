import "./App.css";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import Counter from "./counter";
import Header from "./componentUpdateLifeCyclePhase";
import ComponentUnmout from "./componentUnmountingPhase";
import CounterHook from "./component/react_hooks_life_cycle/useStatteHooks";
import UseEffectHook from "./component/react_hooks_life_cycle/useEffectHooks";
import Home from "./component/Home/home";
import PageNotFound from "./component/NoPage";
import ComponentUpdateLifeCycle from "./componentUpdateLifeCyclePhase";

const RouterApp = () => {
  let routes = useRoutes([
    { path: "/", element: <Home />, exact: true },
    { path: "mounting", element: <Counter /> },
    { path: "update", element: <ComponentUpdateLifeCycle /> },
    { path: "unmount", element: <ComponentUnmout /> },
    { path: "*", element: <PageNotFound /> },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
