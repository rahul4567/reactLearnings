import Counter from "../../counter";
import ComponentUpdateLifeCycle from "../../componentUpdateLifeCyclePhase";
import ComponentUnmout from "../../componentUnmountingPhase";
import CounterHook from "../react_hooks_life_cycle/useStatteHooks";
import UseEffectHook from "../react_hooks_life_cycle/useEffectHooks";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Counter count="4" />
      <ComponentUpdateLifeCycle />
      <ComponentUnmout />
      <div>
        <div>
          <h1>React life cycle using Hooks</h1>
        </div>
        <div>
          <h1>useState</h1>
          <CounterHook />
        </div>
        <div>
          <h1>useEffect</h1>
          <ul>
            <li>
              <p>
                Most React components are pure functions, meaning they receive
                an input and produce a predictable output of JSX.
              </p>
              <p>
                Pure functions have the great benefit of being predictable,
                reliable, and easy to test.
              </p>
            </li>
            <li>
              useEffect is used for side effects in functional components,
              similar to componentDidMount and componentDidUpdate. It runs after
              rendering and can be controlled by specifying dependencies.
            </li>
            <li>
              <p>
                <b>Side Effects in React</b>
              </p>
              <p>Making a request to an API for data from a backend server</p>
              <p>
                To interact with browser APIs (that is, to use document or
                window directly)
              </p>
              <p>
                Using unpredictable timing functions like <b>setTimeout</b> or
                <b>setInterval</b>
              </p>
              <p>
                if we wanted to change the title meta tag to display the user's
                name in their browser tab, we could do it within the component
                itself, but we shouldn't.
                <code>
                  {/*function User({ name }) {
                      document.title = name; 
                      // This is a side effect. Don't do this in the component body!
                        
                      return <h1>{name}</h1>;   
                    }*/}
                </code>
              </p>
              <p>
                useEffect is a tool that lets us interact with the outside world
                but not affect the rendering or performance of the component
                that it's in.
              </p>
              <p>
                <b>Cleanup function in useEffect: </b>
              </p>
              <p>
                For example, if you have a countdown timer using the setInterval
                function, that interval will not stop unless we use the
                clearInterval function.
              </p>
              <p>
                Another example is to use subscriptions with WebSockets.
                Subscriptions need to be "turned off" when we are no longer
                using them, and this is what the cleanup function is for.
              </p>
            </li>
          </ul>
          <UseEffectHook name="Ram" />
        </div>
      </div>
    </div>
  );
}
