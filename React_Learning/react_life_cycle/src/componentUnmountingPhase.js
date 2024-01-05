/*
The unmounting phase refers to the lifecycle stage when a component is being removed from 
the DOM (Document Object Model) and is no longer rendered or accessible.

During this phase, React performs a series 
of cleanup operations to ensure that the component and its 
associated resources are properly disposed of.

componentWillUnmount(): This method is called just before the component is removed from the DOM. 
It allows you to perform any necessary cleanup, such as canceling timers, removing event listeners, 
or clearing any data structures that were set up during the mounting phase.
After componentWillUnmount() is called, the component is removed from the DOM and all of its state 
and props are destroyed.
*/

import React, { Component } from "react";
import Navbar from "./component/Navbar/Navbar";

class ComponentUnmout extends Component {
  state = {
    showChild: true,
  };

  handleDelete = () => {
    this.setState({ showChild: false });
  };

  render() {
    const { showChild } = this.state;

    return (
      <div>
        <Navbar />
        {showChild && <Child />}
        <button type="button" onClick={this.handleDelete}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
    };
    this.timer = null; // Initialize the timer
  }

  // When the component mounts, start the timer
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000); // Update every 1 second (1000 milliseconds)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    alert("The component named Child is about to be unmounted.");
  }

  render() {
    return <h1 className="header-extra-margin">Hello World!</h1>;
  }
}

export default ComponentUnmout;
