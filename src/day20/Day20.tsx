import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PersistentInput } from '../shared/persistent-input/PersistentInput';

export class Day20 extends React.Component<RouteComponentProps, { input: string; result: string }> {

  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {
      input: '',
      result: '',
    };
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.getResult()}>Rerun</button>
        </div>
        <PersistentInput path={this.props.location.pathname} initialValueRetrieved={(val) => {
          this.setState({
            input: val
          }, this.getResult);
        }} value={this.state.input} onChange={(ev) => {
          this.setState({
            input: ev.target.value,
          }, this.getResult);
        }}></PersistentInput>
        <div>{this.state.result}</div>
      </div>
    )
  }

  getPartOne(inputs: string[]) {
  }

  
  getPartTwo(inputs: string[]) {

  }

  getResult() {
    const inputs = this.state.input.split('\n');
    let res1 = this.getPartOne(inputs);
    var res2 = this.getPartTwo(inputs);
    this.setState({
      result: `Puzzle 1: ${res1}
      Puzzle 2: ${res2}`
    });
  }

}