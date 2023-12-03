import React, { Component } from "react";

/*
    This phase occurs when a component's props or state changes, and the component needs to be 
    updated in the DOM.

    1. shouldComponentUpdate(): The shouldComponentUpdate()  method is called before a 
    component is updated. It takes two arguments: nextProps and nextState. 
    This method returns a boolean value that determines whether the component should update or not. 
    If this method returns true, the component will update, 
    and if it returns false, the component will not update.

    2.componentWillUpdate(): is a lifecycle method in React that gets called just before a component's
    update cycle starts. It receives the next prop and state as arguments and allows you to perform 
    any necessary actions before the component updates.
    But this method is not recommended for updating the state, as it can cause an infinite loop of 
    rendering. It is primarily used for tasks such as making API calls, updating the DOM, or 
    preparing the component to receive new data. componentWillUpdate() is often used in conjunction 
    with componentDidUpdate() to handle component updates.

    3. componentDidUpdate(): The componentDidUpdate() method is a lifecycle method in React that 
    is called after a component has been updated and re-rendered. It is useful 
    for performing side effects or additional operations when the component's props or state have changed.

    It's important to include a conditional check inside componentDidUpdate() to prevent infinite loops. 
    If you want to update the state based on a prop change, make sure 
    to compare the previous prop (prevProps) with the current prop (this.props) before updating the state.

    4. getSnapshotBeforeUpdate(): method is called just before the component's UI is updated. 
    It allows the component to capture some information about the current state of the UI, 
    such as the scroll position before it changes. This method returns a value that is passed as the 
    third parameter to the componentDidUpdate() method.
*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteFood: "rice" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritefood: "Ladoo" });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if the favoriteFood state has changed
    return this.state.favoriteFood !== nextState.favoriteFood;
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.favoriteFood !== this.state.favoriteFood) {
      console.log(
        `FavoriteFood is about to update from ${this.state.favoriteFood} to ${nextState.favoriteFood}.`
      );
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritefood;
  }

  componentDidUpdate(prevProps, prevState) {
    document.getElementById("div2").innerHTML =
      "The updated favorite food is " + this.state.favoriteFood;
    if (prevState.favoriteFood !== this.state.favoriteFood) {
      console.log("Count has been updated:", this.state.favoriteFood);
    }
  }

  changeFood = () => {
    this.setState({ favoriteFood: "Pizza" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Food is {this.state.favoriteFood}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button type="button" onClick={this.changeFood}>
          Change food
        </button>
      </div>
    );
  }
}

export default Header;
