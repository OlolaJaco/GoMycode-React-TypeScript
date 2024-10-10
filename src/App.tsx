import React, { Component } from 'react';

// Define the state interface
interface CounterState {
  count: number;
}

// Define the props interface (empty in this case)
interface CounterProps {}

// Class component with type annotations for props and state
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state with type annotations
  state: CounterState = {
    count: 0,
  };

  // Annotate the increment function
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
