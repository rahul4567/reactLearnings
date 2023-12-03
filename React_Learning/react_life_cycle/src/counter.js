import React, { Component } from "react";

/* Mounting Phase 
 1. constructor: The constructor() method is called when the component is first created. 
    You use it to initialize the component's state and bind methods to the component's instance. 

 2. The render() method is responsible for generating the component's virtual DOM representation based on 
    its current props and state. It is called every time the component needs to be re-rendered, 
    either because its props or state have changed, or because a parent component has been re-rendered.

 3. getDerivedStateFromProps(): It is invoked during the mounting and updating phase of a component.
    During the mounting phase, getDerivedStateFromProps() is called after the constructor and
    before render(). This method is called for every render cycle and provides an 
    opportunity to update the component's state based on changes in props before the initial render.

    The method should return an object that represents the updated state of the component, or
    null if no state update is necessary.

    It's important to note that getDerivedStateFromProps() is a static method, 
    which means it does not have access to the this keyword and cannot interact 
    with the component's instance methods or properties.

 4. componentDidMount(): This method is called once the component has been mounted into the DOM. 
    It is typically used to set up any necessary event listeners or timers, perform any necessary 
    API calls or data fetching, and perform other initialization 
    tasks that require access to the browser's DOM API.
*/

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      favoritefood: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(this);
    this.setState((prevState) => ({
      count: parseInt(prevState.count, 10) + 1,
      favoritefood: prevState.favoritefood,
    }));
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        favoritefood: "Rice",
        count: this.state.count,
      });
    }, 1000);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.count && state.count === 0) {
      return { count: props.count };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoritefood} Mounte phase</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Counter;
