import { Component } from "react";

export default class Lifecyclev2 extends Component {
  constructor(props) {
    super(props);
    console.log("CC 1- Inside Constructor");
  }

  componentDidMount() {
    console.log("CC 3- Inside componentDidMount");
  }

  render() {
    console.log("CC 2- Inside render");
    return <>Child Component</>;
  }
}
