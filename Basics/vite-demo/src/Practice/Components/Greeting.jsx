import { Component } from "react";

class Greeting extends Component{
    state = {
        name:"Your_Name"
    }


    render(){
        return(
            <>
            <input type="text" name="name" placeholder="Your Name" value={this.state.name} onChange={(e)=>{
                this.setState({
                    name:e.target.value,
                });
            }} />
            
            <p>Hello {this.state.name===""?"Your_Name":this.state.name}!, Welcome to our website.</p>


            </>
        );
    }

}

export default Greeting;