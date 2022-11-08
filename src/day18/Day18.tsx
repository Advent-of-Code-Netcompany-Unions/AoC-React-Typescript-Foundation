import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PersistentInput } from '../shared/persistent-input/PersistentInput';

export class Day18 extends React.Component<RouteComponentProps, { input: string; result: string }> {

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

  getPartOneString(input: string[]) {

  }

  getPartTwoString(input: string[]) {

  }

  getResult() {
    const inputs = this.state.input.split('\n');
    var res1 =this.getPartOneString(inputs);

    var res2 = this.getPartTwoString(inputs);
    this.setState({
      result: `Puzzle 1: ${res1}
      Puzzle 2: ${res2}`
    });
  }

}