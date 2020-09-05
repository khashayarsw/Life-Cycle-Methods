import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Life-Cycle.css";
export default class Lc extends Component {
  state = {
    number: 0
  };

  componentDidMount() {
    console.log("Your Component is Here!");
  }

  componentDidUpdate() {
    console.log("Hey Updating is coming!");
  }

  componentWillUnmount() {
    console.log("Component is dead!");
  }

  handleClick = () => {
    this.setState(myState => {
      return {
        number: myState.number + 1
      };
    });
  };

  render() {
    return (
      <div className="mianDiv">
        <h1>Lets practice Life-cycle-methods!</h1>
        <p>Open your console</p>
        <p>{this.state.number}</p>
        <button className="addBtn" onClick={this.handleClick}>
          Add State
        </button>
        <Link className="firstLink" to="/unmount">
          Go to another page
        </Link>
      </div>
    );
  }
}
//LifeCycle Methods:

/*1: render() method : 
The render() method is the most used lifecycle method. You will see it in all React classes. This is because render() is the only required method within a class component in React.
As the name suggests it handles the rendering of your component to the UI. It happens during the mounting and updating of your component.


2:componentDidMount():
componentDidMount() is called as soon as the component is mounted and ready. 
This is a good place to initiate API calls, if you need to load data from a remote endpoint.


3:componentDidUpdate()
This lifecycle method is invoked as soon as the updating happens. 
The most common use case for the componentDidUpdate() method is updating the DOM in response to prop or state changes.


4:componentWillUnmount()
As the name suggests this lifecycle method is called just before the component is unmounted and destroyed.
If there are any cleanup actions that you would need to do, this would be the right spot.


Uncommon React Lifecycle Methods:

-shouldComponentUpdate():
This lifecycle can be handy sometimes when you don’t want React to render your state or prop changes.


-static getDerivedStateFromProps():
This is one of the newer lifecycle methods introduced very recently by the React team.
This will be a safer alternative to the previous lifecycle method componentWillReceiveProps().
It is called just before calling the render() method.
This is a static function that does not have access to “this“.  getDerivedStateFromProps() returns an object to update state in response to prop changes. It can return a null if there is no change to state.
This method also exists only for rare use cases where the state depends on changes in props in a component.


-getSnapshotBeforeUpdate():
getSnapshotBeforeUpdate() is another new lifecycle method introduced in React recently.
 This will be a safer alternative to the previous lifecycle method componentWillUpdate().



RECAP:
React component lifecycle has three categories – Mounting, Updating and Unmounting.


The render() is the most used lifecycle method.
It is a pure function.
You cannot set state in render()


The componentDidMount() happens as soon as your component is mounted.
You can set state here but with caution.


The componentDidUpdate() happens as soon as the updating happens.
You can set state here but with caution.


The componentWillUnmount() happens just before the component unmounts and is destroyed.
This is a good place to cleanup all the data.
You cannot set state here.


The shouldComponentUpdate() can be used rarely.
It can be called if you need to tell React not to re-render for a certain state or prop change.
This needs to be used with caution only for certain performance optimizations.


The two new lifecycle methods are getDerivedStateFromProps() and getSnapshotBeforeUpdate().
They need to be used only occasionally.
Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.
*/
