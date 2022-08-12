import { Component } from "react";

export default class TakePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: null,
    };

    this.cameraPhoto = this.cameraPhoto.bind(this);
    this.startExam = this.startExam.bind(this);
    this.stopExam = this.stopExam.bind(this);
  }

  cameraPhoto = () =>
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.setState({ photo: stream });
    });

  startExam = () => {};
  stopExam = () => {};

  render() {
    const rect = {
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"400px",
      width:"600px",
      border:"1px solid silver"
    }
    return (
      <>
        <h1>Photo</h1>

        <div style={rect}> Photo </div>
        <button onClick={this.startExam}>Start</button>
        <button onClick={this.stopExam}>Stop</button>
      </>
    );
  }
}
