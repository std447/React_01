import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 5,
        };
    }

    _handleIncrement = ()=>{
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    _handleDecrement = () => {
        if(this.state.counter>0) this.setState({
            counter: this.state.counter - 1,
        });
    }

    render(){
        // console.log("Re-render");
        return(
            <>
            <p>Counter: {this.state.counter}</p>
            <button onClick={this._handleIncrement}>
                Increment
            </button>
            <button onClick={this._handleDecrement}>
                Decrement
            </button>
            
            </>
        )

    }
}

export default Counter;