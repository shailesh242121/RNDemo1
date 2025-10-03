import React, { Component } from 'react';
import ChildComponent from './Child';
interface ParentProps {}
interface ParentState {}

class ParentComponent extends Component<ParentProps, ParentState> {
  handleChildAction = (message: string) => {
    console.log(`Action from child: ${message}`);
    // Perform parent-specific logic here
  };

  render() {
    return (
      <ChildComponent onAction={this.handleChildAction} />
    );
  }
}

export default ParentComponent;