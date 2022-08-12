import { Component } from "react";

import Lifecyclev2 from "./Lifecyclev2";

export default class Lifecyclev1 extends Component {
  constructor(props) {
    super(props);

    console.log("1 Inside Constructor");

    this.state = {
      counter1: 1,
      counter2: 0,
    };
  }

  componentDidUpdate(){
    console.log("3 - Inside didMount")
  }

  render() {
    console.log("2 - inside Render");
    return (
      <>
        <p>My Name is Chinmay</p>
        <h2>
          Counter1: {this.state.counter1}{" "}
          <button onClick={() => this.setState({counter1:this.state.counter1 + 1})}>
            + Counter1
          </button>
        </h2>

        <h2 >Counter2: {this.state.counter2}
        <button onClick={()=>this.setState({counter2:this.state.counter2 + 1})}>+ Counter2</button>
        </h2>

        <Lifecyclev2 counter1={this.state.counter1} />
      </>
    );
  }
}
